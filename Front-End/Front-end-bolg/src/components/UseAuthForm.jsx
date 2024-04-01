import React, { useState } from "react";
import InputBox from "./InputBox";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const UseAuthForm = ({ type }) => {
  return (
    <div className="h-screen   flex items-center justify-center">
      <form className=" ">
        <p className="text-4xl font-semibold capitalize py-10 my-5">
          {type === "sign-in" ? "Welcome back" : "Join us today"}
        </p>

        {type !== "sign-in" && (
          <InputBox
            name="name"
            type="text"
            placeholder="Full Name"
            icon={<FaRegUser />}
          />
        )}

        {/* Example with another icon */}
        <InputBox
          name="email"
          type="email"
          placeholder="Email"
          icon={<MdOutlineEmail />}
        />
        <InputBox
          name="password"
          type="password"
          placeholder="password"
          icon={<RiLockPasswordLine />}
        />
        <button
        type="submit"
          className="btn btn-sm border-none mx-auto rounded-full   flex  bg-black text-white btn-outline"
          
        >
          {type.replace("-"," ")}
        </button>
        <div className="relative w-full flex items-center justify-center gap-3 my-5 opacity-10 uppercase text-black font-bold">
          <hr className="w-1/2 border-black" /> 
          <p>or</p>
          <hr className="w-1/2 border-black" />


        </div>
        <button className="btn border-none bg-black w-full rounded-full hover:bg-[#4285F4] text-white">
           <FcGoogle className="text-2xl" />continue with google
        </button>
       <div className="my-5">
       {
          type=="sign-in" ?
          <p className="text-gray-500">Don't have an account ? 
          <Link className="link" to="/signup">
             join us today
          </Link>
          </p>
          :
          <p> already a member ?
          <Link className="link" to="/signin">
             sign in here
          </Link> </p>
        }
       </div>

      </form>
    </div>
  );
};

export default UseAuthForm;
