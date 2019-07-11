import React, { useState } from 'react';
import TrainingView from './components/training/TrainingView';
import CombatView from './components/combat/CombatView';
import { InitStats } from './store';
import { Router } from '@reach/router';

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
      <Router>
        <TrainingView path="/"
        player={player}
        handleStats={handleStats}
        />
        <CombatView path="/combat"
        player={player}
        />
      </Router>
    </div>
  );

}