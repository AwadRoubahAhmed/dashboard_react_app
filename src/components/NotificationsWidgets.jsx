import React from "react";
import Button from "./Button";

export default function NotificationsWidgets() {
  //Code JavasScript;
  const style = {
    padding: "5px",
    backgroundColor: "blue",
    color: "#ffffff",
    borderRadius: "5px",
  };

  //Code JSX;
  return (
    <div className="bg-sky-300 p-2">
      <h5 className="text-lg font-bold">NotificationsWidgets</h5>
      <p>
        Vous avez <span style={style}>5</span> notifications !
      </p>
      <Button/>
    </div>
  );
}
