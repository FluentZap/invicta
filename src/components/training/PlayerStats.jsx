import React from 'react'
import PlayerStatBar from './PlayerStatBar';

export default function PlayerStats(props) {
    const statArray = Object.entries(props.player.currentStats);
    const maxStatArray = Object.entries(props.player.maxStats);
    // console.log(statArray);    
    
    return (
        <div>
            {statArray.map((stat, index)=> 
                <PlayerStatBar 
                name={stat[0]} 
                value={stat[1]} 
                max={maxStatArray[index][1]} 
                key={index}/>
            )}
        </div>
    )
}
