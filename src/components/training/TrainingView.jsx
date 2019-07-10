import React from 'react'
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
  console.log('ReRender');
  
  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12} sm={4}>
        <TrainingActions
        handleStats={props.handleStats}/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerView/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlayerStats player={props.player}/>
      </Grid>
    </Grid>
  )
}
