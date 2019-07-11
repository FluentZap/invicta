import React, { useState } from 'react';
import TrainingView from './components/training/TrainingView';
import { InitStats } from './store';

export default function App() {

  const [player, setPlayer] = useState(InitStats);

  const handleStats = (statString, value) => {
    // console.log(player);

    setPlayer(player => {
      let newplayer = {...player}
      newplayer[statString] += value;
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