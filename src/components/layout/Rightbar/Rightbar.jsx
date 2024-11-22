import React, { useState } from "react";
import Logo from "./Logo";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Footer from "./Footer";
import useUserStore from "../../../Stores/user-store";
import CartForm from "./Cart-form";
import { useLocation } from "react-router-dom";
import SummaryForm from "./SummaryForm";

export default function Rightbar() {
  const [regisPage, setRegisPage] = useState(false);
  const setPage = (state) => setRegisPage(state);
  const token = useUserStore((state) => state.token);
  const location = useLocation()
  console.log("location is " , location.pathname)
  return (
    <div className="w-1/4 h-screen border-4 border-l-black flex flex-col ">
      {!token ? <Logo /> : null}
      {!token ? regisPage ? <RegisterForm /> : <LoginForm /> : location.pathname==="/reception"?<SummaryForm />:<CartForm />}
      <div>
      {!token ? <div><Footer setPage={setPage} /></div> : null}
        
      </div>
    </div>
  );
}
