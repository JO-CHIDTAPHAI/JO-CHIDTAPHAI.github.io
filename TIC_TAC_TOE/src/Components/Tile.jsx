import React from 'react'

function Tile({className, value, onClick, playerTurn }) {
    let hoverclss = null;
    if(value == null && playerTurn != null){
        hoverclss = `${playerTurn.toLowerCase()}-hover`;
    }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverclss}`}>
       <span className={value === "X" ? "tile-x" : "tile-o"}>{value}  </span>
    </div>
  )
}

export default Tile
