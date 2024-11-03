import React from "react";

export default function Button() {
  const handelClick = () => {
    
  };
  return (
    <div>
      <button
        onClick={handelClick}
        className="bg-slate-900 hover:bg-slate-700 text-white p-1.5 mt-4 rounded-md"
      >
        Click
      </button>
    </div>
  );
}
