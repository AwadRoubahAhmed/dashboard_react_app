import React from "react";
import Button from "./Button";

export default function TasksWidgets() {
  //Code JavasScript;
  const style = {
    padding: "5px",
    backgroundColor: "blue",
    color: "#ffffff",
    borderRadius: "5px",
  };

  //Code JSX;
  return (
    <div className="bg-indigo-300 mt-2 p-2">
      <h5 className="text-lg font-bold">TasksWidgets</h5>
      <p>
        Vous avez <span style={style}>3</span> taches en attends!
      </p>
      <Button />
    </div>
  );
}
