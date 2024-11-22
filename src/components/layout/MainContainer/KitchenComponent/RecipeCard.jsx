import React from "react";
import useOrderStore from "../../../../Stores/order-store";
import IconRemove from "./IconRemove";
import IconEdit from "./IconEdit";
import IconHide from "./IconHide";
import IconUnhide from "./IconUnhide";

export default function RecipeCard(props) {
  const { className, title, description, price,hide, imgSrc, edit, id, hdlRemove, hdlToggleHide , ...restProps } =
    props;
  const addTableOrder = useOrderStore((state) => state.addTableOrder);
  
  const hdlOnClick = () => {
    const data = {
      title: title,
      description: description,
      price: Number(price),
      imgSrc: imgSrc,
      recipeId : id,
    };
    
    addTableOrder(data);
  };
  
  return (
    <div className="${className} mx-4 my-4 gap-2 h-[350px]" {...restProps}>
      <div
        className={`card card-compact bg-base-100 w-[200px] shadow-xl border-slate-400 `}
      >
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="break-words">{description}</p>
          <div className="card-actions justify-end">
            {/* <h1 className="text-red-600">Hide</h1> */}
            <button className="btn bg-slate-400" onClick={ edit ? null : hdlOnClick}>
              {price}
            </button>
          </div>
          {edit ? (
            <div className="card-actions justify-center">
              <button className="btn border-2 flex flex-1" onClick={() => hdlToggleHide(id)}>
                {hide?<IconHide />:<IconUnhide/>}
              </button>
              <button className="btn border-2 flex flex-1" onClick={() => hdlRemove(id)}>
                <IconRemove />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
