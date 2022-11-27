import React from 'react'
import Xicon from "../icons/Xicon"
import Oicon from "../icons/Oicon"


const Win = () => {
  return (
    <div className="score">
        <p>you win!</p>
        <h3 className='score__title '>{" "}
            <Xicon/> Takes the round {" "}
        </h3>
        <div className="score_btns">
            <button className="btn btn-sm">Quit</button>
            <button className='btn btn-sm btn-yellow'>Next</button>

        </div>
    </div>
  )
}

export default Win;