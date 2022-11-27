import React from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { GameContext } from '../context/GameContext'
import { useContext } from 'react'

const Start = () => {
    const { activeUser, PlayMode,setActiveUser,setPlayMode } = useContext(GameContext);
  return (
    <div className="start">
        <div className="start__header">
        <Xicon/>
        <Oicon/>
        </div>
        <div className="card shadow-gray">
                <h1 className="text-lg">Pick player 1'St mark</h1>
                <div className="start_players">
                    <span className='start_player--active'>
                        <Xicon color="dark" />
                    </span>
                    <span className='start_player'>
                        <Oicon color="light"/>
                    </span>
                </div>
                <p className='text-light'>remember: x goes first</p>
        </div>
        <div className="start__btns">
            <button className='btn btn-yellow'>new game (vs CPU)</button>
            <button className='btn btn-blue'>new game (vs Player)</button>
        </div>
    </div>
  )
}

export default Start