import React from 'react'
import PlayerStatBar from './PlayerStatBar';

export default function PlayerStats(props) {
    console.log("playerstats", props);
    
    return (
        <div>
            <PlayerStatBar health={props.player.health}/>
        </div>
    )
}
