import React, { useEffect, useState } from "react";
import RecipeCard from "./KitchenComponent/RecipeCard";
import axios from "axios";
import AddCard from "./KitchenComponent/AddCard";
import useOrderStore from "../../../Stores/order-store";

export default function OrderDashboard(props) {
  const { edit } = props;
  const [categoryList, setCategoryList] = useState([]);
  const [keyList, setKeyList] =useState([])
  const removeMenu = useOrderStore((state) => state.removeMenu);
  const toggleHide = useOrderStore((state) => state.toggleHide);
  const getCategoryList = async () => {
    const resp = await axios.get("http://localhost:8000/recipe");
    const categoryList = resp.data.result;
    const keys = resp.data.keys;
    console.log("key is : ", keys)
    setCategoryList(categoryList);
    setKeyList(keys)
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const hdlRemove = async (id) => {
    await removeMenu(id);
    console.log("remove");
    await getCategoryList();
  };

  const hdlToggleHide = async (id) => {
    await toggleHide(id);
    console.log("hide");
    await getCategoryList();
  };

  return (
    <div className="flex mx-auto flex-col flex-1 h-screen overflow-y-auto">
      {edit ? <AddCard keys={keyList} getCategoryList = {getCategoryList}/> : null}
      {Object.keys(categoryList).map((key) => (
        <div key={key} className="flex flex-col my-2 px-2">
          <h3 className="mt-2 font-bold underline text-3xl">{key}</h3>
          <div className="flex flex-row">
            {categoryList[key].map((item) => {
              if (edit) {
                return (
                  <RecipeCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    hide={item.isHide}
                    edit={edit ? true : false}
                    hdlRemove={hdlRemove}
                    hdlToggleHide={hdlToggleHide} 
                  />
                );
              } 
              else {
                if (item.isHide) {
                  return null;
                } else
                  return (
                    <RecipeCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      hide={item.isHide}
                      edit={edit ? true : false}
                      hdlRemove={hdlRemove}
                      hdlToggleHide={hdlToggleHide}
                    />
                  );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
