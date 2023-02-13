import React from 'react'

export default function GameInfo({level,score,life}) {
  return (
    <div className='game-info'>
        <span>Level: {level}</span>
        <span>Your Score: {score}</span>
        <span>Life: {life}</span>
    </div>
  )
}
