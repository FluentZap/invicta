import React from 'react'
import StatBar from './../training/StatBar'

const ActionStatusBars = (props) => {
  const statArray = Object.entries(props.player.currentStats);
  const maxStatArray = Object.entries(props.player.maxStats);
  console.log(props);
  
  return (
    <div>
      <StatBar player={props.player}/>
      <StatBar />
    </div>
  )
}

export default ActionStatusBars
