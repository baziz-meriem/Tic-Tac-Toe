import React from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { GameContext } from '../context/GameContext'
import { useContext } from 'react'

const Start = () => {
    const { activeUser,setActiveUser,changePlayMode } = useContext(GameContext);
  return (
    <div className="start">
        <div className="start__header">
        <Xicon/>
        <Oicon/>
        </div>
        <div className="card shadow-gray">
                <h1 className="text-lg">Pick player 1'St mark</h1>
                <div className="start_players">
                    <span className={activeUser === 'x' ? "start_player--active":""}
                    onClick={ ()=> setActiveUser("x")}>
                        <Xicon color={activeUser === "x" ? "dark" : "light"} />
                    </span>
                    <span className={activeUser === "o" ? "start_player--active":""}
                    onClick={ ()=> setActiveUser("o")}>
                        <Oicon color={activeUser === "o" ? "dark" : "light"}/>
                    </span>
                </div>
                <p className='text-light'>remember: x goes first</p>
        </div>
        <div className="start__btns">
            <button className='btn btn-yellow' onClick={()=> changePlayMode('cpu')}>new game (vs CPU)</button>
            <button className='btn btn-blue' onClick={()=> changePlayMode('user')}>new game (vs Player)</button>
        </div>
    </div>
  )
}

export default Start