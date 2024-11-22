import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Leftbar from "./Leftbar/Leftbar";
import Rightbar from "./Rightbar/Rightbar";
import MainContainer from "./MainContainer/MainContainer";
import useLayoutStore from "../../Stores/layout-store";




export default function MainLayout() {
  const isLBOpen = useLayoutStore(state=>state.isLBOpen)
  const isRBOpen = useLayoutStore(state=>state.isRBOpen)
  
  return (
    <div>
      <Navbar />
      <div className="flex ">
        {isLBOpen && <Leftbar />}
        <MainContainer className="flex-1"/>
        {isRBOpen && <Rightbar />}
      </div>
    </div>
  );
}
