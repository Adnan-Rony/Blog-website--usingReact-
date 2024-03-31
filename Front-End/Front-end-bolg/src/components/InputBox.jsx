import { GoEyeClosed } from "react-icons/go";

const InputBox = ({ name, id, value, placeholder, type, icon }) => {
  return (
    <div className="relative w-[100%] mb-4 ">
      <input
        className="input ml-3 w-full bg-slate-50 border-gray-100 rounded-xl pl-10  outline-none border-none"
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
      />
      <div className="absolute top-3 left-4 text-2xl">{icon}</div>
      {type == "password" ? (
        <div className="absolute cursor-pointer top-3 right-4 text-2xl">
          <GoEyeClosed />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
