import React from 'react'
import { trainingActions }from '../../store'
import TrainingAction from './TrainingAction';

export default function TrainingActions(props) {    
    
    return (
        <div>            
            {trainingActions.map((action)=>
                <TrainingAction 
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
//Speed move speeds
//Vitality Max health



//d6
//d10
