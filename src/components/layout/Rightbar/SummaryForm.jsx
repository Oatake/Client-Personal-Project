import React from "react";
import useSummaryStore from "../../../Stores/summary-store";
import OrderItem from "./ItemOrder/OrderItem";
import axios from "axios";

export default function SummaryForm() {
  const table = useSummaryStore((state) => state.table);
  const menuList = useSummaryStore((state) => state.menuList);
  const totalCost = useSummaryStore((state) => state.totalCost);
  const orderId = useSummaryStore(state=>state.orderId)
  const resetStore = useSummaryStore(state=>state.resetStore)
  const hdlOnclick = async ()=>{
    const paidData = {id: orderId}
    const paid = await axios.patch("http://localhost:8000/order/paid",paidData)
    console.log(paid) 
    const body = {tableName : "table"+table, status : "AVAILABLE"}
    console.log(body)
    const resp = await axios.patch("http://localhost:8000/table/",body)
    resetStore()
  }
  return (
    <div className="mx-4 overflow-y-auto">
      <div className=" bg-slate-300 mt-8 px-2 h-[50px] text-center text-3xl ">
        {table}
      </div>
      <div className="divider divider-neutral px-4 "></div>
      {menuList?.map((el, index) => {
        console.log(el);
        return (
          <OrderItem
            key={index}
            title={el.Recipe.title}
            amount={el.amount}
            price={el.Recipe.price}
            icon={null}
          />
        );
      })}
      <div className="flex items-baseline">
        <div className="flex flex-1">Net : {totalCost}</div>
        <div className="btn bg-slate-400 hover:bg-blue-400" onClick={hdlOnclick}>Bills</div>
      </div>
    </div>
  );
}
