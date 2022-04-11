import React from 'react';
import { useState } from 'react';
import './App.css';
import Board from './Components/Board';

    
function App(){
  const [squares, setSquares] = useState(['','','','','','','','','']);
  const [turn, setTurn] = useState(true);
  const [player, setPlayer] = useState("X");
  const [gameStatus, setGameStatus] = useState('Next player: X');

function reset(){
  setSquares(['','','','','','','','','']);
  setTurn(true);
  setPlayer("X");
  setGameStatus("Next player: X");

}

function handleClick(params) {
  if(!turn){
    return;
  }

  let winner = "";
  let sq = [...squares];
  
  if(sq[params] != ""){
    return;
  }
  
  if (player === "X") {
    sq[params] = "X";
    
  }else{
    sq[params] = "O";
  }
  setSquares(sq);

const winningCombos = {
  across:[
    [0,1,2]
    ,[3,4,5]
    ,[6,7,8]
  ]
  ,down:[
    [0,3,6]
    ,[1,4,7]
    ,[2,5,8]
], diagonally:[[0,4,8],[6,4,2]]}

  for(let combo in winningCombos){
    winningCombos[combo].forEach(combination => {
    if(sq[combination[0]] === '' 
    || sq[combination[1]] === ''
    ||sq[combination[0]] === ''){

    } else if(sq[combination[0]] === sq[combination[1]] && sq[combination[1]] === sq[combination[2]]){
      //alert(player+ "Won");
      setGameStatus(`Winner: ${player}`)
      winner = player;
      setTurn(false);
      return;
    }else{
    }

    });
  }




  

  if(winner === ""){
if(player === "X"){
    setPlayer("O");
    setGameStatus('Next player: O');
  }else{
    setPlayer("X");
    setGameStatus('Next player: X');
  }

  if(sq[0] != "" 
  &&sq[1] != "" 
  &&sq[2] != "" 
  &&sq[3] != "" 
  &&sq[4] != "" 
  &&sq[5] != "" 
  &&sq[6] != "" 
  &&sq[7] != "" 
  &&sq[8] != ""){
    
    setGameStatus('Tie');
    setTurn(false);
  }

  }
    }


  return (
      <div className='container'><h1>Tic Tac Toe</h1>
<div className='status'>{gameStatus}</div>
<Board squares={squares} clickHandler={handleClick} />
<button onClick={reset} className='reset'>Reset</button>
      </div>
    );
  
}
export default App

