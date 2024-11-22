import React from "react";
import OrderItem from "../../Rightbar/ItemOrder/OrderItem";
import IconSent from "./IconSent";
import axios from "axios";

export function OrderBaord(props) {
  const { table, tableName, kitchenOrder, getKitchenOrder, isLastOrder } =
    props;
  const finishedOrder = async (id, tableId) => {
    try {
      console.log("isLastOrder : ", isLastOrder)
      const body = { id: id, isLastOrder: isLastOrder, tableId: tableId };
      const resp = await axios.patch("http://localhost:8000/order/", body);
      console.log(resp);
      getKitchenOrder();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 border-4 border-black">
      <div className=" bg-slate-300 mt-8 px-2 h-[50px] text-center text-3xl ">
        {tableName}
      </div>
      <div className="divider divider-neutral px-4 "></div>
      {kitchenOrder[table].map((item) => {
        return (
          <OrderItem
            key={item.Order.Table.tableName}
            amount={item.amount}
            title={item.Recipe.title}
            kitchen={true}
            icon={
              <IconSent
                className="btn"
                onClick={() => finishedOrder(item.id, item.Order.Table.id)}
              />
            }
          />
        );
      })}

      <div></div>
    </div>
  );
}

export default OrderBaord;
