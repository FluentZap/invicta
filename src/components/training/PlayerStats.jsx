import React from 'react'
import PlayerStatBar from './PlayerStatBar';

export default function PlayerStats(props) {
    const statArray = Object.entries(props.player);
    // console.log(statArray);
    
    
    return (
        <div>
            {statArray.map((stat, index)=> 
                <PlayerStatBar name={stat[0]} value={stat[1]} key={index}/>
            )}
        </div>
    )
}
