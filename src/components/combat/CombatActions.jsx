import React from 'react'
import { combatActions }from '../../store'
import ActionButton from '../ActionButton';
import StatusBars from './StatusBars'

export default function CombatActions(props) {
    return (
        <div>
            <StatusBars player={props.player}/>
            {combatActions.map((action)=>
                <ActionButton 
                name={action}
                key={action}
                setActivity={props.setActivity}/>
                )}
        </div>
    )
}
