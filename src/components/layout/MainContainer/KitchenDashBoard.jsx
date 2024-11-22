import React, { useEffect, useState } from "react";
import CartForm from "../Rightbar/Cart-form";
import axios from "axios";
import OrderItem from "../Rightbar/ItemOrder/OrderItem";
import { OrderBaord } from "./KitchenComponent/OrderBoard";

export default function KitChenDashboard() {
  const [kitchenOrder, setKitchenOrder] = useState({});
  const getKitchenOrder = async () => {
    const resp = await axios.get("http://localhost:8000/order/kitchen");
    // console.log(resp.data)
    setKitchenOrder(resp.data);
  };
  useEffect(() => {
    getKitchenOrder();
  }, []);

  return (
    <div className="flex flex-1 mx-4 mt-4 overflow-auto" >
      <div className="flex gap-4 bo">
        {Object.keys(kitchenOrder).map((el) => {
          console.log("______");
          console.log(el);
          console.log(kitchenOrder[el].length)
          // const tableId = kitchenOrder[el][0].Order.Table.id;
          const tableName = kitchenOrder[el][0].Order.Table.tableName;
          
          return <OrderBaord table={el} tableName={tableName} kitchenOrder={kitchenOrder} getKitchenOrder={getKitchenOrder} isLastOrder = {kitchenOrder[el].length==1?true:false}/>
          // const reception = kitchenOrder[el].map(item=>{
          //   console.log(item)
          //   return <OrderItem amount={item.amount} kitchen={true}/>;
          // })
          // return reception
        })}
       
      </div>
    </div>
  );
}
