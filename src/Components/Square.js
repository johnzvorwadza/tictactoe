import React from 'react'

function Square(props) {
    return <button onClick={()=>props.clickHandler(props.num)} className={`square ${props.squares[props.num]}`}>{props.squares[props.num]}</button>
}

export default Square