import React from "react";
import InputBox from "./InputBox";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
const UseAuthForm = ({ type }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <form>
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
      </form>
    </div>
  );
};

export default UseAuthForm;
