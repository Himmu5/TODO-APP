import React from "react";
import { AiOutlinePlus } from "react-icons/ai";


export default function Button({onClick}) {
  return (
    <div>
      <div className="text-white " >
        <AiOutlinePlus className="relative top-6 left-1" />
        <button onClick={onClick} className="px-5 py-1 bg-yellow-500 rounded-full ">
          Add a todo
        </button>
      </div>
    </div>
  );
}
