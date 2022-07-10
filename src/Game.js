import React, { useState } from 'react'
import Square from './components/Square'
import styles from './Game.module.css'
function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const lineWin = []

  const [xPlayer, setXPlayer] = useState(false)

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    if (board[index] || winner) {
      return
    }
    const temp = board.slice()
    xPlayer ? (temp[index] = 'X') : (temp[index] = 'O')
    setBoard(temp)
    setXPlayer(!xPlayer)
  }

  function calculateWinner(board) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        lineWin.push(a, b, c)
        return board[a]
      }
    }
    return null
  }

  if (winner) {
    console.log(winner)
  }

  const handleRestart = () => {
    setBoard(Array(9).fill(null))
  }

  const isWin = (x) => lineWin.includes(x)

  return (
    <>
      <div className={styles.game}>
        {board.map((item, index) => (
          <Square
            isClass={isWin(index) ? 'win' : ''}
            value={item}
            key={index}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
      <br />
      {winner && (
        <>
          <h2>{winner} Winner</h2>
          <button onClick={handleRestart}>Restart Game</button>
        </>
      )}
    </>
  )
}

export default Game
