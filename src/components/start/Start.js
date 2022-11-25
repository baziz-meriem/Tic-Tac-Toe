import React from 'react'

const Start = () => {
  return (
    <div className="start">
        <div className="start__header">x o</div>
        <div className="card shadow-gray">
                <h1 className="text-lg">Pick player 1'St mark</h1>
                <div className="start_players">
                    <span className='start_player'>
                        x
                    </span>
                    <span className='start_player--active'>
                        o
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