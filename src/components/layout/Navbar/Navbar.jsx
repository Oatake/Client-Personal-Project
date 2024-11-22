import React from "react";
import MainLogo from "./MainLogo";
import MoreIcon from "./MoreIcon";
import LoginButton from "./LoginButton";
import useLayoutStore from "../../../Stores/layout-store";
import useUserStore from "../../../Stores/user-store";
import CartButton from "./CartButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const setIsLBOpen = useLayoutStore((state) => state.setIsLBOpen);
  const setIsRBOpen = useLayoutStore((state) => state.setIsRBOpen);
  const token = useUserStore((state) => state.token);
  const location = useLocation()
  console.log(location)
  return (
    <div className="w-screen h-20 border-black border-4 drop-shadow-2xl flex justify-between  items-center px-10">
      <MoreIcon
        className="w-12 hover:bg-slate-400 cursor-pointer"
        onClick={() => setIsLBOpen()}
      />
      <MainLogo />
      {token ? (<CartButton onClick={() => setIsRBOpen()} className={false ? "btn-disabled" : null}/>) 
              : (<LoginButton onClick={() => setIsRBOpen()} />)}
    </div>
  );
}

export default Navbar;
