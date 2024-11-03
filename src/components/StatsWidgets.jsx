import React from "react";
import Button from "./Button";

export default function StatsWidgets() {
  //Code JavasScript;
  const style = {
    padding: "5px",
    backgroundColor: "blue",
    color: "#ffffff",
    borderRadius: "5px",
  };

  //Code JSX;

  return (
    <div className="bg-teal-300 mt-2 p-2">
      <h5 className="text-lg font-bold">StatsWidgets</h5>
      <p>
        Vous avez accompli <span style={style}>7</span> taches!
      </p>
      <Button />
    </div>
  );
}
