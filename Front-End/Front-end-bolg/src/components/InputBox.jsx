import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { FaEye } from "react-icons/fa";


const InputBox = ({ name, id, value, placeholder, type, icon,done }) => {
  
  const [passwordvisiable, setpassowrdvisiable] = useState(false);


  return (
    <div className="relative  w-[100%] mb-4 ">
      <input
        className="input ml-3 w-full bg-slate-50 border-gray-100 rounded-xl pl-10  outline-none border-none"
        name={name}
        id={id}
        type={
          type == "password" ? (passwordvisiable ? "text" : "password") : type
        }
        placeholder={placeholder}
        defaultValue={value}
      />

      <div className="absolute top-3 left-4 text-2xl">{icon}</div>

      {type == "password" ? (
        <div className="absolute cursor-pointer top-3 right-4 text-2xl">
          <FaEye
            onClick={() => setpassowrdvisiable((currentvalue) => !currentvalue)}
          />
        </div>
      ) : (
        ""
      )}

         

    </div>
  );
};

export default InputBox;
