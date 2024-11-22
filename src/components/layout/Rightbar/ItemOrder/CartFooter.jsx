import React from "react";
import useOrderStore from "../../../../Stores/order-store";
import axios from "axios";

export default function CartFooter(props) {
  const { className, ...restProps } = props;
  const currentTable = useOrderStore(state=>state.currentTable)
  const tableOrder = useOrderStore(state=>state.tableOrder)
  const netOrder = useOrderStore(state=>state.netOrder)
  const resetCurrTableOrder = useOrderStore(state=>state.resetCurrTableOrder)
  const hdlSubmitOrder = async() => {
    try {
      const body = {
        table : {data : {tableName: "table"+currentTable, status : "WAITING"}},
        orders : {data : {arrOrder : tableOrder[currentTable]}},
        total : {data : {totalPrice : netOrder[currentTable]}}
      }
      const resp = await axios.post("http://localhost:8000/order/", body)
      if(resp.status == 200)
        resetCurrTableOrder()
      
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <div className={`w-full flex flex-col px-2 ${className}`}>
      <div>
        <span className="font-bold">Net</span> : {netOrder[currentTable]}
      </div>
      <div className="divider px-4 my-0"></div>
      <div
        className="btn bg-slate-400 hover:font-bold"
        onClick={hdlSubmitOrder}
      >
        SENT ORDER
      </div>
    </div>
  );
}
