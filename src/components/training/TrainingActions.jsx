import React from 'react'
import { trainingActions }from '../../store'
import TrainingAction from './TrainingAction';

export default function TrainingActions() {
    
    return (
        <div>            
            {trainingActions.map((action)=>
                <TrainingAction name={action}/>
                )}
        </div>
    )
}
