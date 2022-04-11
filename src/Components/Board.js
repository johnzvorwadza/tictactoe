import React from 'react'
import Square from './Square';

function Board(props) {
    return(<div className='board'>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='0'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='1'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='2'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='3'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='4'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='5'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='6'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='7'/>
    <Square squares={props.squares} clickHandler={props.clickHandler} num='8'/>
    </div>);
}

export default Board