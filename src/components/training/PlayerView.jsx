/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden'
    // backgroundColor: '#ceaf79',
    // backgroundImage: `url(${Background})`,
    // height: props.height,
    // width: props.width,
    // width: '100%',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat'    
  },
  image: {    
    imageRendering: 'pixelated',
  }
}));


export default function PlayerView(props) {
  const classes = useStyles();
  
  //85 x 55
  return (
    <div className={classes.root} style={{ width: props.size.x, height: props.size.y }}>
      <img 
        className={classes.image} src={props.spriteSheet} 
        style={{ width: '600%', height: '600%', 
        marginLeft: -(props.size.x * props.currentSprite.x),
        marginTop: -(props.size.y * props.currentSprite.y) }}/>
    </div>
  )
}