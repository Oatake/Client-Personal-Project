import React from "react";
import RemoveIcon from "./IconComponent/RemoveIcon";
import useOrderStore from "../../../../Stores/order-store";

function OrderItem(props) {
  const {title, price, id:index, amount, kitchen,icon:Icon}=props
  const removeTableOrder = useOrderStore(state=>state.removeTableOrder)
  const hdlRemove=()=>{
    console.log(index)
    removeTableOrder(index)
  }
  
  return (
    <div className="w-full h-[80px] mb-4 border-4 flex justify-end items-center ">
      <div className="flex-1 flex-col "> 
        <div className="text-l border-b-4 border-r-4 py-2 px-2">{title}</div>
        <div className="flex justify- border-r-4">
          <div className={`px-2 ${kitchen?"w-full":"w-1/2"}`}>Amount: {amount}ea.</div>
          {kitchen?null:<div className="px-2 w-1/2">Price: {price}THB</div>}
        </div>
      </div>
      {Icon ?Icon:<RemoveIcon className="btn h-3/4 hover:bg-slate-400 " onClick={hdlRemove}/>}
      
    </div>
  );
}

export default OrderItem;
