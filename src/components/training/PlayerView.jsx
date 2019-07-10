import React, { useState, useEffect } from 'react'
import CharacterImage12 from '../../assets/ezgif-2-921cf343ee3d-gif-85x55-sprite-png/tile012.png'
import CharacterImage14 from '../../assets/ezgif-2-921cf343ee3d-gif-85x55-sprite-png/tile014.png'
import Background from '../../assets/parchment.jpg'
import { makeStyles } from '@material-ui/core/styles';




// function advanceAnimation(index, ) {

// }


const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: '#ceaf79',
    // backgroundImage: `url(${Background})`,
    height: '100vh',
    // width: '100%',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat'    
  },
  image: {
    width: 600,
    imageRendering: 'pixelated',    
    
  }
}));


export default function PlayerView(props) {
  const [sprite, setSprite] = useState(0);
  useEffect(() => {
    const animate = setInterval(() => {
      if (sprite >= 1) {
        setSprite(0)
      } else {
        setSprite(sprite + 1)
      }          
    }, 1000)
  
    return () => {
      clearInterval(animate)
    };
  })

  const classes = useStyles();
  const image = [CharacterImage12, CharacterImage14]

  return (
    <div className={classes.root}>
      <img className={classes.image} src={image[sprite]} alt=""/>
    </div>
  )
}
