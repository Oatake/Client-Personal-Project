import React from "react";
import Profile from "./Profile";
import MenuItem from "./MenuItem";
import GroupIcon from "./IconComponent/GroupIcon";
import KitchenIcon from "./IconComponent/KitchenIcon";
import OrderIcon from "./IconComponent/OrderIcon";
import RecipesIcon from "./IconComponent/RecipesIcon";
import ReceptionIcon from "./IconComponent/ReceptionIcon";
import useUserStore from "../../../Stores/user-store";
import { useNavigate } from "react-router-dom";

export default function Leftbar() {
  const role = useUserStore((state) => state.role);
  const navigate = useNavigate();
  return (
    <div className="w-1/4 h-screen border-4 border-r-black flex flex-col px-2">
      <Profile />
      {role.isAdmin || role.isButler ? (
        <MenuItem icon={OrderIcon} text="ORDER" onClick={() => navigate("/")} />
      ) : null}
      {role.isAdmin || role.isKitchenHand ? (
        <MenuItem
          icon={KitchenIcon}
          text="KITCHEN"
          onClick={() => {
            navigate("kitchen");
          }}
        />
      ) : null}
      {role.isAdmin || role.isReception ? (
        <MenuItem
          icon={ReceptionIcon}
          text="RECEPTION"
          onClick={() => navigate("reception")}
        />
      ) : null}
      {role.isAdmin ? (
        <MenuItem
          icon={RecipesIcon}
          text="ALL MENU"
          onClick={() => {
            navigate("menues");
          }}
        />
      ) : null}
      {role.isAdmin ? (
        <MenuItem
          icon={GroupIcon}
          text="USER MANAGEMENT"
          onClick={() => {
            navigate("admin");
          }}
        />
      ) : null}
    </div>
  );
}
