import React from 'react'
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";

const BoardCard = ({user="noUser",active,index}) => {
    return (
    <div className="">
        <div className={`card ${active && user === 'o' && 'shadow-yellow'} ${active && user === 'x' && 'shadow-blue'} ${!active ? "shadow-gray":"active"}`}>

            {user == 'x' && <Xicon color={active && 'dark'} size="lg"/>}
            {user == 'o' && <Oicon color={active && 'dark'} size="lg"/>}

        </div>
    </div>
  )
}

export default BoardCard;