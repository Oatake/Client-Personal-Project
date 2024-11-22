import React from "react";
import OrderItem from "./ItemOrder/OrderItem";
import CartFooter from "./ItemOrder/CartFooter";
import useOrderStore from "../../../Stores/order-store";

export function CartForm() {
  const tableOrder = useOrderStore((state) => state.tableOrder);
  const currentTable = useOrderStore((state) => state.currentTable);
  
  console.log(tableOrder)

  return (
    <div className="flex flex-col items-center px-4 border">
      <div className=" bg-slate-300 mt-8 w-[50px] h-[50px] rounded-full text-center text-3xl ">
        {currentTable}
      </div>
      <div className="divider px-4"></div>
      {tableOrder[currentTable]?.map((el, index) => {
        return (
          <OrderItem title={el.title} price={el.price} key={index} id={index} amount={el.amount}/>
        );
      })}

      <CartFooter className="" />
    </div>
  );
}

export default CartForm;
