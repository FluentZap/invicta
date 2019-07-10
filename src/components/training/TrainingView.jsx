import React from 'react'
import Background from '../../assets/trainingBG.png'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import TrainingActions from './TrainingActions';
import PlayerView from './PlayerView';
import PlayerStats from './PlayerStats';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${Background})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  input: {
    display: 'none',
  },
}));


export default function TrainingView() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12} sm={4}>
        <TrainingActions/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerView/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerStats/>
      </Grid>
    </Grid>
  )
}
