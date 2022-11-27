import { createContext, useState } from "react";

const GameContext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState("start"); //start or game

  const [activeUser, setActiveUser] = useState("x");
  const [playMode, setPlayMode] = useState("user");

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        setActiveUser,
        playMode,
        setPlayMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };
