import axios from "axios";
import React, { useState } from "react";

const initialForm = {
  title: "",
  price: "",
  categoryId: undefined,
  description: "",
};

export default function AddRecipeModal(props) {
  const { id, keys ,getCategoryList } = props;
  const [form, setForm] = useState(initialForm);

  const hdlOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const createNewMenu = async (form) => {
    try {
      const body = {...form, price : Number(form.price), categoryId : Number(form.categoryId)}
      console.log(body)
      const resp = await axios.post("http://localhost:8000/recipe/", body);
      console.log(resp);
      setForm(initialForm);
      getCategoryList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog id={id} className="modal">
      <div className="modal-box flex flex-col gap-8">
        <h3 className="font-bold text-lg">CREATE NEW RECIPE</h3>
        {/* <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}
        <div className="flex">
          <div name="title" className="w-1/2 flex justify-start">
            <label for="title" className="w-[50px]">
              Title :{" "}
            </label>
            <input
              className="flex-1 border mx-2"
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={hdlOnChange}
            />
          </div>
          <div name="price" className="w-1/2 flex justify-start">
            <label for="price">Price : </label>
            <input
              className="flex-1 border mx-2"
              type="text"
              name="price"
              id="price"
              value={form.price}
              onChange={hdlOnChange}
            />
          </div>
        </div>
        <div className="flex border">
          <textarea
            className="textarea textarea-bordered flex-1"
            placeholder="Enter description ..."
            name="description"
            value={form.description}
            onChange={hdlOnChange}
          ></textarea>
        </div>

        <div className="modal-action  flex justify-between items-baseline">
          <div
            name="category"
            className=" border flex items-baseline bg-slate-300"
          >
            <label for="category">Category : </label>
            <select name="categoryId" id="categoryId" onChange={hdlOnChange}>
              <option
                name="categoryId"
                placeholder="Select..."
                selected
                disabled
              >
                Select...
              </option>
              {keys.map((el, index) => {
                return (
                  <option name="categoryId" value={index + 1}>
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn mx-4" onClick={()=>createNewMenu(form)}>
              Add
            </button>
            <button className="btn" onClick={() => setForm(initialForm)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
