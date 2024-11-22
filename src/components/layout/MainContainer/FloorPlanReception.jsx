import React, { useEffect, useState } from "react";
import layout from "../../../assets/FloorPlan.png";
import { useNavigate } from "react-router-dom";
import useOrderStore from "../../../Stores/order-store";
import axios from "axios";
export default function FloorPlanReception(props) {
  const { reception, hdlCheckIn, hdlCheckOut, modalComponent } = props;
  const setCurrentTable = useOrderStore((state) => state.setCurrentTable);
  const navigate = useNavigate();
  const [tableList, setTableList] = useState([]);
  async function getTable() {
    const resp = await axios.get("http://localhost:8000/table/");

    setTableList(resp.data);
    console.log(tableList[0]?.status);
  }

  useEffect(() => {
    console.log("useEffect")
    getTable();
    setInterval(()=>getTable(),1000)
  }, []);

  

  

  return (
    <div className="relative flex flex-col mx-auto mt-36 items-center">
      <img src={layout} alt="layout" />

      <div className="grid grid-rows-4 grid-cols-5 gap-1 w-[480px] h-[380px] absolute top-0 right-[95px] text-center text-3xl">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[63px] ${
              tableList[0]?.status == "EATING"
                ? "bg-green-400"
                : tableList[0]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[0]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            1
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[68px] left-[93px]"
          >
            {tableList[0]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(1)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[0]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(1)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className=""> </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[28px] ${
              tableList[1]?.status == "EATING"
                ? "bg-green-400"
                : tableList[1]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[1]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            2
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[68px] left-[63px]"
          >
            {tableList[1]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(2)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[1]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(2)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[40px] ${
              tableList[2]?.status == "EATING"
                ? "bg-green-400"
                : tableList[2]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[2]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            3
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[68px] left-[75px]"
          >
            {tableList[2]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(3)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[2]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(3)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[58px] ${
              tableList[3]?.status == "EATING"
                ? "bg-green-400"
                : tableList[3]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[3]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            4
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[68px] left-[93px]"
          >
            {tableList[3]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(4)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[3]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(4)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[15px] left-[63px] ${
              tableList[4]?.status == "EATING"
                ? "bg-green-400"
                : tableList[4]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[4]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            5
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[58px] left-[98px]"
          >
            {tableList[4]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(5)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[4]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(5)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>


        <div className=""> </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[25px] left-[28px] ${
              tableList[5]?.status == "EATING"
                ? "bg-green-400"
                : tableList[5]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[5]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            6
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[68px] left-[63px]"
          >
            {tableList[5]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(6)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[5]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(6)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[25px] left-[40px] ${
              tableList[6]?.status == "EATING"
                ? "bg-green-400"
                : tableList[6]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[6]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            7
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[68px] left-[75px]"
          >
            {tableList[6]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(7)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[6]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(7)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[25px] left-[58px] ${
              tableList[7]?.status == "EATING"
                ? "bg-green-400"
                : tableList[7]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[7]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            8
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[68px] left-[93px]"
          >
            {tableList[7]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(8)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[7]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(8)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>
       
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[0px] left-[63px] ${
              tableList[8]?.status == "EATING"
                ? "bg-green-400"
                : tableList[8]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[8]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            9
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[43px] left-[98px]"
          >
            {tableList[8]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(9)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[8]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(9)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>
      
        <div className=""> </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[20px] left-[28px] ${
              tableList[9]?.status == "EATING"
                ? "bg-green-400"
                : tableList[9]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[9]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            10
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[60px] left-[63px]"
          >
            {tableList[9]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(10)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[9]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(10)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[20px] left-[40px] ${
              tableList[10]?.status == "EATING"
                ? "bg-green-400"
                : tableList[10]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[10]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            11
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[60px] left-[75px]"
          >
            {tableList[10]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(11)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[10]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(11)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[20px] left-[58px] ${
              tableList[11]?.status == "EATING"
                ? "bg-green-400"
                : tableList[11]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[11]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            12
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[60px] left-[93px]"
          >
            {tableList[11]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(12)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[11]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(12)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>
      
        <div className=""> </div>
        <div className=""> </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[28px] ${
              tableList[12]?.status == "EATING"
                ? "bg-green-400"
                : tableList[12]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[12]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            13
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[70px] left-[63px]"
          >
            {tableList[12]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(13)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[12]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(13)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[40px] ${
              tableList[13]?.status == "EATING"
                ? "bg-green-400"
                : tableList[13]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[13]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            14
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[70px] left-[75px]"
          >
            {tableList[13]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(14)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[13]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(14)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>
       
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-1 border-black rounded-full w-1/2 h-1/2 relative top-[28px] left-[58px] ${
              tableList[14]?.status == "EATING"
                ? "bg-green-400"
                : tableList[14]?.status == "ORDERING"
                ? "bg-yellow-400"
                : tableList[14]?.status == "WAITING"
                ? "bg-red-400"
                : "bg-slate-400"
            }`}
          >
            15
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow relative top-[70px] left-[93px]"
          >
            {tableList[14]?.status == "AVAILABLE" ? (
              <li onClick={() => hdlCheckIn(15)}>
                <a>Check In</a>
              </li>
            ) : null}
            {tableList[14]?.status == "EATING" ? (
              <li onClick={() => hdlCheckOut(15)}>
                <a>Check Out</a>
              </li>
            ) : null}
          </ul>
        </div>
       
      </div>
    </div>
  );
  o;
}
