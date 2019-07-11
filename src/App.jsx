import React, { useState } from 'react';
import TrainingView from './components/training/TrainingView';
import CombatView from './components/combat/CombatView';
import { InitStats } from './store';
import { Router } from '@reach/router';

export default function App() {

  const [player, setPlayer] = useState(InitStats);

  const handleStats = (statString, value) => {
    // console.log(player);

    setPlayer(player => {
      let newplayer = {...player}
      newplayer.currentStats[statString] += value;
      if (newplayer.currentStats[statString] > newplayer.maxStats[statString]) {
        newplayer.currentStats[statString] = newplayer.maxStats[statString]
      }
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