import React, { useState, useEffect } from 'react'
import Background from '../../assets/trainingBG.png'
import Grid from '@material-ui/core/Grid';
import PlayerSprite from '../../assets/gladiator.png'
import SkelieSprite from '../../assets/Skeleton Idle.png'
import { playerAnimations } from '../../store'
import { makeStyles } from '@material-ui/core/styles';
import TrainingActions from './TrainingActions';
import SpriteView from './SpriteView'
import PlayerStats from './PlayerStats';
import { Link } from '@reach/router';

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
  header: {
    fontFamily: "'Caesar Dressing', cursive",
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-around'
  }
}));
// energy: 0,
//   nourishment: 0,
//     accuracy: 0,
//       health: 15,
//         charisma: 0,
//           strength: 0,
//             speed: 0,
//               vitality: 0,
//                 evasion: 0,

export default function TrainingView(props) {
  const classes = useStyles();

  const [activity, setActivity] = useState('Sleep');
  useEffect(() => {
    const statUpdate = setInterval(() => {
      // 'Feast', 'Sleep', 'Kick Trees', 'Spar', 'Socialise', 'Medcus'
      switch (activity) {
        case 'Sleep':
          props.handleStats({
            energy: .01,
            nourishment: -0.001
          })
          break;
        case 'Feast':
        props.handleStats({
          energy: .001,
          nourishment: .02
        })
          break;
        case 'Kick Trees':
        props.handleStats({
          energy: -0.01,
          nourishment: -0.01,
          strength: 0.01,
        })
          break;
        case 'Spar':
        props.handleStats({
          energy: -0.01,
          nourishment: -0.01,
          speed: 0.01,
          evasion: 0.01,
        })
          break;
        default:
          break;
      }
    }, 20)

    return () => {
      clearInterval(statUpdate)
    };
  }, [activity])

  const updateActivity = (name) => {
    setActivity(name)
    if (name === "Sleep") { setSprite(getStartAnimation('goToSleep')) }
    if (name === "Train") { setSprite(getStartAnimation('train')) }
    if (name === "Nourish") { setSprite(getStartAnimation('nourish')) }
    if (name === "Get Buff") { setSprite(getStartAnimation('train')) }
    if (name === "Acrobatics") { setSprite(getStartAnimation('victory')) }
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

  const [sprite, setSprite] = useState(getStartAnimation('sleep'));
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
        <Link to="combat">Combat View</Link>
      </header>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} sm={4}>
          <TrainingActions
            setActivity={updateActivity} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SpriteView
            spriteSheet={PlayerSprite}
            size={{ x: 85 * 5, y: 55 * 5 }}
            currentSprite={sprite.sprite}
          />
          <SpriteView
            spriteSheet={SkelieSprite}
            size={{ x: 24 * 5, y: 32 * 5 }}
            currentSprite={sprite.sprite}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PlayerStats player={props.player} />
        </Grid>
      </Grid>
    </>
  )
}
