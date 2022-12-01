import React,{ createContext, useState,useContext,useEffect } from "react";
import { calcWinner } from "../helpers/calcSquares";
import { ModalContext } from "./ModalContext";

const GameContext = createContext();

const GameState = (props) => {
  const {showModal, setModalMode,hideModal} = useContext(ModalContext)
  const [screen, setScreen] = useState("start"); //start or game

  const [activeUser, setActiveUser] = useState("x");
  const [playMode, setPlayMode] = useState("user");

  const [squares, setSquares] = useState(new Array(9).fill(''))
  const [xnext,setXnext] = useState(false)

  const [winner, setWinner] = useState(null)
  const [winnerLine, setWinnerLine] = useState(null)

  const [ties, setTies] = useState({x:0,o:0})


  const handelSquareClick = (index) => {
    if(squares[index] || winner){
      return;
    }
    const currentUser = xnext ? 'o' : 'x'
    if(playMode === "cpu" && currentUser !== activeUser) {
      return
    }
    let sq = [...squares]
    sq[index] = !xnext ? 'x': 'o' //if its not the turn of x then save x

    setSquares(sq)
    setXnext(!xnext)
    checkWinner(sq)
  }
  const changePlayMode = mode => {
    setPlayMode(mode);
    setScreen("game");
  }
  const handleReset = ()=> {
    setSquares(new Array(9).fill(''))
    setXnext(false)
    setWinner(null)
    setWinnerLine(null)
    setActiveUser('x')
    setTies({x:0,o:0})
    hideModal()
    setScreen("start")
  }
  const handleNextRound = ()=> {
    setSquares(new Array(9).fill(''))
    setXnext(winner === 'x');
    setWinner(null)
    setWinnerLine(null)
    hideModal()

  }

  const checkWinner = (sq) => {
    const isWinner = calcWinner(sq)

    if( isWinner) {
      setWinner(isWinner.winner)
      setWinnerLine(isWinner.line)
      //set ties
      const ti = { ...ties };
      ti[isWinner.winner] += 1;
      setTies(ti)
      showModal()
      setModalMode("winner")
      

    } }
    useEffect(() => {
      checkNoWinner();

      
    }, [xnext , winner,screen]);

    const checkNoWinner = ()=> {
      let sq = [...squares]
      let moves = sq.filter((sq)=> sq === "");
     console.log(moves.length)
      if(moves.length === 0 ) {
        setWinner("no");
        showModal();
        setModalMode("winner");
      }
    }
 
  return (
    <GameContext.Provider
      value={{
        screen,
        xnext,
        ties,
        winner,
        winnerLine,
        activeUser,
        squares,
        handleReset,
        handleNextRound,
        handelSquareClick,
        setActiveUser,
        changePlayMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };
