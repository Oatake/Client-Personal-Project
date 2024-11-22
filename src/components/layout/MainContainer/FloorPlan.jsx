import React, { useEffect, useState } from "react";
import layout from "../../../assets/FloorPlan.png";
import { useNavigate } from "react-router-dom";
import useOrderStore from "../../../Stores/order-store";
import axios from "axios";
export default function FloorPlan(props) {
  
  const setCurrentTable = useOrderStore((state) => state.setCurrentTable);
  const navigate = useNavigate();
  const [tableList, setTableList] = useState([]);
  async function getTable() {
    const resp = await axios.get("http://localhost:8000/table/");

    setTableList(resp.data);
    console.log(tableList[0]?.status);
  }

  useEffect(() => {
    
    getTable();
    setInterval(()=>{
      console.log("use interval")
      // getTable()
    },1000)
  }, []);//need to remove interval every rerender

  const hdlOnClick = (name) => {
    setCurrentTable(Number(name));
    console.log(Number(name));
    navigate("/order");
  };


  return (
    <div className="relative flex flex-col mx-auto mt-36 items-center">
      <img src={layout} alt="layout" />

      <div className="grid grid-rows-4 grid-cols-5 gap-1 w-[480px] h-[380px] absolute top-0 right-[95px] text-center text-3xl">
      
          <div
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[85px] ${
              tableList[0]?.status == "EATING"
                ? "bg-green-400"
                : tableList[0]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[0]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
            name="1"
            onClick={() => hdlOnClick("1")}
          >
            1
          </div>
        
        <div className=""> </div>

        
          <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[50px] ${
            tableList[1]?.status == "EATING"
              ? "bg-green-400"
              : tableList[1]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[1]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="2"
          onClick={() => hdlOnClick("2")}
        >
          2
        </div>
        
         
        
        
          <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[64px] ${
            tableList[2]?.status == "EATING"
              ? "bg-green-400"
              : tableList[2]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[2]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="3"
          onClick={() => hdlOnClick("3")}
        >
          3
        </div>
        
           
        
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[80px] ${
            tableList[3]?.status == "EATING"
              ? "bg-green-400"
              : tableList[3]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[3]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="4"
          onClick={() => hdlOnClick("4")}
        >
          4
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[15px] left-[85px] ${
            tableList[4]?.status == "EATING"
              ? "bg-green-400"
              : tableList[4]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[4]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="5"
          onClick={() => hdlOnClick("5")}
        >
          5
        </div>

        <div className=""> </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[25px] left-[50px] ${
            tableList[5]?.status == "EATING"
              ? "bg-green-400"
              : tableList[5]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[5]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="6"
          onClick={() => hdlOnClick("6")}
        >
          6
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[25px] left-[64px] ${
            tableList[6]?.status == "EATING"
              ? "bg-green-400"
              : tableList[6]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[6]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="7"
          onClick={() => hdlOnClick("7")}
        >
          7
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[25px] left-[80px] ${
            tableList[7]?.status == "EATING"
              ? "bg-green-400"
              : tableList[7]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[7]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="8"
          onClick={() => hdlOnClick("8")}
        >
          8
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[0px] left-[85px] ${
            tableList[8]?.status == "EATING"
              ? "bg-green-400"
              : tableList[8]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[8]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="9"
          onClick={() => hdlOnClick("9")}
        >
          9
        </div>
        <div className=""> </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[20px] left-[50px] ${
            tableList[9]?.status == "EATING"
              ? "bg-green-400"
              : tableList[9]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[9]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="10"
          onClick={() => hdlOnClick("10")}
        >
          10
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[20px] left-[64px] ${
            tableList[10]?.status == "EATING"
              ? "bg-green-400"
              : tableList[10]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[10]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="11"
          onClick={() => hdlOnClick("11")}
        >
          11
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[20px] left-[80px] ${
            tableList[11]?.status == "EATING"
              ? "bg-green-400"
              : tableList[11]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[11]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="12"
          onClick={() => hdlOnClick("12")}
        >
          12
        </div>

        <div className=""> </div>
        <div className=""> </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[50px] ${
            tableList[12]?.status == "EATING"
              ? "bg-green-400"
              : tableList[12]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[12]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="13"
          onClick={() => hdlOnClick("13")}
        >
          13
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[64px] ${
            tableList[13]?.status == "EATING"
              ? "bg-green-400"
              : tableList[13]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[13]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="14"
          onClick={() => hdlOnClick("14")}
        >
          14
        </div>
        <div
          className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[80px] ${
            tableList[14]?.status == "EATING"
              ? "bg-green-400"
              : tableList[14]?.status == "ORDERING"
              ? "bg-yellow-400"
              : tableList[14]?.status == "WAITING"
              ? "bg-red-400"
              : "bg-slate-400"
          }`}
          name="15"
          onClick={() => hdlOnClick("15")}
        >
          15
        </div>
      </div>
    </div>
  );
  o;
}
