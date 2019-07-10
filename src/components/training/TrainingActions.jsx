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
                handleStats={props.handleStats}/>
                )}
        </div>
    )
}
