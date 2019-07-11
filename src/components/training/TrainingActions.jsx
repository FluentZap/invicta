import React from 'react'
import { trainingActions }from '../../store'
import ActionButton from '../ActionButton';

export default function TrainingActions(props) {    
    
    return (
        <div>            
            {trainingActions.map((action)=>
                <ActionButton 
                name={action}
                key={action}
                setActivity={props.setActivity}/>
                )}
        </div>
    )
}


//Stun
//roll of 20 or higher gets a crit


//dex Change to evade and crit

//Strength Damage
//Accuracy Hit Chance/crit chance
//Speed action speeds
//Vitality Max Health
//Evasion evade hits
//XP levels up player

//For each level upgrade 




//d6
//d10
