import React, { useState, useEffect } from 'react'
import Background from '../../assets/trainingBG.png'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import TrainingActions from './TrainingActions';
import PlayerView from './PlayerView';
import PlayerStats from './PlayerStats';


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
  })

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12} sm={4}>
        <TrainingActions
          setActivity={setActivity}/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerView />
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerStats player={props.player} />
      </Grid>
    </Grid>
  )
}
