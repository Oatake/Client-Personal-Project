import React from "react";

export default function MenuItem(props) {
  const { icon: Icon, text, className, ...restProp } = props;
  return (
    <div className={`btn border-4 border-black flex w-full h-14 justify-start items-center my-1 ${className}`} {...restProp}>
        <Icon className ="h-full px-4"/>
        <div className="divider divider-horizontal"></div>
        <h3 className="font-bold">{text??"Test"}</h3>
    </div>)
}
