import React, { useState, useEffect } from 'react'
import Background from '../../assets/trainingBG.png'
import Grid from '@material-ui/core/Grid';
import PlayerSprite from '../../assets/gladiator.png'

import { makeStyles } from '@material-ui/core/styles';
import TrainingActions from './TrainingActions';
import PlayerView from './PlayerView';
import PlayerStats from './PlayerStats';


const animations = {
  idle: {
    frames: [
      {x: 0, y: 0},
      {x: 1, y: 0},
     ],
    time: 10,
    after: true
  },
  attack: {
    frames: [
      {x: 0, y: 0},
      {x: 1, y: 0},
     ],
    time: 5,
    after: true
  },
  sleep: {
    frames: [
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 5, y: 5},
      {x: 4, y: 5},
     ],
    time: 10,
    after: true
  },
  train: {
    frames: [
      {x: 0, y: 4},
      {x: 1, y: 4},
      {x: 2, y: 4},
      {x: 3, y: 4},
      {x: 4, y: 4},
      {x: 4, y: 4},
      {x: 3, y: 4},
      {x: 2, y: 4},
      {x: 1, y: 4},      
     ],
    time: 2,
    after: true
  },
  decap: {
    frames: [
      {x: 1, y: 2},
      {x: 2, y: 2},
      {x: 3, y: 2},
      {x: 4, y: 2},
      {x: 5, y: 2},
      {x: 0, y: 3},
      {x: 0, y: 3}, 
      {x: 0, y: 3}, 
      {x: 0, y: 3}, 
      {x: 0, y: 3}, 
      {x: 0, y: 3}      
     ],
    time: 5,
    after: true
  },
  test: {
    frames: [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 3, y: 0},
      {x: 4, y: 0},      
     ],
    time: 5,
    after: true
  }


}

// font-family: 'Marcellus SC', serif;
// font-family: 'Cinzel Decorative', cursive;
//797 x 529
const useStyles = makeStyles(theme => ({
  root: {
    // backgroundImage: `url(${Background})`,
    height: '100vh',
    width: '100%',
    backgroundPositionX: 'center',
    backgroundPositionY: 'bottom',
    backgroundSize: '1594px 1058px',
    backgroundRepeat: 'no-repeat',
    imageRendering: 'pixelated',
  },
  input: {
    display: 'none',
  },
}));


export default function TrainingView(props) {
  const classes = useStyles();

  const [activity, setActivity] = useState('Idle');
  useEffect(() => {    
    const statUpdate = setInterval(() => {
        switch (activity) {
          case 'Idle':
            props.handleStats('health', .03)
            break;
          case 'Nourish':
            props.handleStats('nourishment', .02)
            break;
          case 'Sleep':
            props.handleStats('energy', .01)
            break;
          case 'Train':
            props.handleStats('strength', .01)
            break;

          default:
            break;
      }
    }, 10)

    return () => {
      clearInterval(statUpdate)
    };
  }, [activity])

  const [sprite, setSprite] = useState(
    {
      animation: 'decap',
      index: 0,
      time: 0,
      sprite: {x: 0, y: 0}
    }
  );
  useEffect(() => {
    const animate = setInterval(() => {
      let currentAnim = animations[sprite.animation];
      let newIndex = 0;
      if (sprite.time >= currentAnim.time) {
        if (sprite.index >= currentAnim.frames.length -1) {
          newIndex = 0;
        } else {
          newIndex = sprite.index + 1;
        } 
        let currentSprite = { ...sprite, index: newIndex, sprite: currentAnim.frames[newIndex], time: 0 };
        setSprite(currentSprite);                
      } else {
        let currentSprite = { ...sprite, time: sprite.time + 1}; 
        setSprite(currentSprite);
      }
    }, 100)

    return () => {
      clearInterval(animate)
    };
  }, [sprite])



  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12} sm={4}>
        <TrainingActions
          setActivity={setActivity}/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerView 
        spriteSheet={PlayerSprite}
        size={{x: 425, y: 275}}
        currentSprite={sprite.sprite}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerStats player={props.player} />
      </Grid>
    </Grid>
  )
}
