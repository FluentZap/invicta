import React, { useState } from 'react';
import TrainingView from './components/training/TrainingView';
import { InitStats } from './store';

export default function App() {

  const [player, setPlayer] = useState(InitStats);

  const handleStats = (value, key) => {
    // console.log(player);
    let changes = Object.entries(value)
    
    setPlayer(player => {
      let newplayer = {...player}            
      changes.forEach((change) =>{        
        newplayer.currentStats[change[0]] += change[1];
        if (newplayer.currentStats[change[0]] > newplayer.maxStats[change[0]]) {
          newplayer.currentStats[change[0]] = newplayer.maxStats[change[0]]
        }  
      })
      
      return newplayer;
    })
  }

  return (
    <div className="App">
      <TrainingView
      player={player}
      handleStats={handleStats}
      />
    </div>
  );

}