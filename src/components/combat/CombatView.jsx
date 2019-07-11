import React, { useState, useEffect } from 'react'
import {Link} from '@reach/router'
import CombatActions from '../combat/CombatActions'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { playerAnimations } from '../../store'
import PlayerSprite from '../../assets/gladiator.png'
import PlayerView from '../training/SpriteView';
// import PlayerStats from './PlayerStats';

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
    header: {
      fontFamily: "'Caesar Dressing', cursive",
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-around'
    }
  }));
  

export default function CombatView(props) {
    const classes = useStyles();

    const [activity, setActivity] = useState('Idle');
    useEffect(() => {
        console.log(activity)
    }, [activity])
  
    const updateActivity = (name) => {
      setActivity(name)
      if (name === "Sleep") {setSprite(getStartAnimation('goToSleep'))}    
      if (name === "Train") {setSprite(getStartAnimation('train'))}
      if (name === "Nourish") {setSprite(getStartAnimation('nourish'))}
      if (name === "Get Buff") {setSprite(getStartAnimation('train'))}
      if (name === "Acrobatics") {setSprite(getStartAnimation('victory'))}
    }
  
  
    function getStartAnimation(name) {
      return {
        animation: name,
        index: 0,
        time: 0,
        sprite: playerAnimations[name].frames[0],
        running: true
      }
    }
  
    const [sprite, setSprite] = useState(
      {
        animation: 'victory',
        index: 0,
        time: 0,
        sprite: { x: 0, y: 0 },
        running: true
      }
    );
    useEffect(() => {
      const animate = setInterval(() => {
        let currentAnim = playerAnimations[sprite.animation];
        if (sprite.time >= currentAnim.time) {
          
          if (sprite.index >= currentAnim.frames.length - 1) {
            let newIndex = 0;
            let newAnimation = sprite.animation;
            let running = false;
            if (currentAnim.after === 'repeat') {
              running = true
            } else if (currentAnim.after === 'stop') {
              running = false; newIndex = sprite.index
            } else {
              newAnimation = currentAnim.after
              newIndex = 0;      
              currentAnim = playerAnimations[newAnimation];
            }          
  
            let currentSprite = { ...sprite, index: newIndex, sprite: currentAnim.frames[newIndex], time: 0, running: running, animation: newAnimation };
            setSprite(currentSprite);
          } else {
            let newIndex = 0;
            newIndex = sprite.index + 1;
            let currentSprite = { ...sprite, index: newIndex, sprite: currentAnim.frames[newIndex], time: 0 };
            setSprite(currentSprite);
          }
        } else {
          let currentSprite = { ...sprite, time: sprite.time + 1 };
          setSprite(currentSprite);
        }
      }, 100)
  
      return () => {
        clearInterval(animate)
      };
    }, [sprite])
    
    return (
        <>
        <header className={classes.header}>
          <h1>INVICTUS</h1>
          <Link to="/">Training View</Link>
        </header>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12} sm={4}>
            <CombatActions
              setActivity={updateActivity}
              player={props.player} />
          </Grid>
         <Grid item xs={12} sm={4}>
            <PlayerView
              spriteSheet={PlayerSprite}
              size={{ x: 425, y: 275 }}
              currentSprite={sprite.sprite}
            />
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <PlayerStats player={props.player} />
          </Grid>  */}
        </Grid>
      </>
    )
}
