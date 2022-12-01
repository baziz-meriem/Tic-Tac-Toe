import { React, useContext } from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import { GameContext } from "../context/GameContext";

const BoardCard = ({ user = "noUser", active, index }) => {
  const { handelSquareClick } = useContext(GameContext);
  return (
    <div
      className={`card ${active && user === "o" && "shadow-yellow"} ${
        active && user === "x" && "shadow-blue"
      } ${!active ? "shadow-gray" : "active"}`}
      onClick={()=> handelSquareClick(index)}
    >
      {user == "x" && <Xicon color={active && "dark"} size="lg" />}
      {user == "o" && <Oicon color={active && "dark"} size="lg" />}
    </div>
  );
};

export default BoardCard;
