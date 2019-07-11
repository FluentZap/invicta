import React from 'react'
import { combatActions }from '../../store'
import ActionButton from '../ActionButton';

export default function CombatActions(props) {
    return (
        <div>
            {combatActions.map((action)=>
                <ActionButton 
                name={action}
                key={action}
                setActivity={props.setActivity}/>
                )}
        </div>
    )
}
