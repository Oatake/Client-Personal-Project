import React, { useState } from 'react'
import axios from "axios";

export default function RegisterForm() {
  const [form, setForm] = useState({
    userName : "",
    password : "",
    confirmPassword : ""
  })
  const hdlChangeInput = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
    console.log(form)
  }
  const submitForm = async(e) =>{try {
    e.preventDefault()
    const resp = await axios.post("http://localhost:8000/auth/register/",form)
    console.log(resp)
  } catch (error) {
    console.log(error)
  }
    
  }
    return (
        <div className="mt-4">
          <div className="flex justify-center text-2xl">
            <h1>REGISTER !!!</h1>
          </div>
          <form onSubmit={submitForm}>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full my-2"
                name="userName"
                value = {form.userName}
                onChange={hdlChangeInput}
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full my-2"
                name="password"
                value = {form.password}
                onChange={hdlChangeInput}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full my-2"
                name="confirmPassword"
                value = {form.confirmPassword}
                onChange={hdlChangeInput}
              />
              {/* <button className="btn btn-primary text-xl">Log in</button> */}
              <div className="flex justify-center hover:drop-shadow-2xl">
                <button className="text-xl text-gray-500 hover:bg-gray-400 hover:bg-gray-700 hover:text-white">Register</button>
              </div>
              <div className="divider my-0 px-5 mt-5"></div>
            </div>
          </form>
        </div>
      );
    }