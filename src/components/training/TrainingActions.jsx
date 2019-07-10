import React from 'react'
import { trainingActions }from '../../store'
import TrainingAction from './TrainingAction';

export default function TrainingActions() {
    
    return (
        <div>
            <h1>Training</h1>
            {trainingActions.map((action)=>
                <TrainingAction name={action}/>
                )}
        </div>
    )
}
