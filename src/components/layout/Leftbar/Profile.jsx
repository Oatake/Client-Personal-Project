import React from "react";
import defaultAvartar from "../../../assets/default-profile.jpg";
import useUserStore from "../../../Stores/user-store";
export default function Profile(props) {
  const userName = useUserStore(state=>state.userName)
  const { imgSrc, ...restProps } = props;
  return (
    <div className="flex flex-col justify-center items-center my-2">
      <div className="rounded-full w-3/4 border-2 overflow-hidden flex justify-center bg-slate-400">
        <img src={imgSrc ?? defaultAvartar} />
      </div>
      <div className="text-2xl mt-3">
        <h1>title : {userName && "xxxxxxx"}</h1>
      </div>
    </div>
  );
}
