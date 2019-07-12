/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden' 
  },
  image: {    
    imageRendering: 'pixelated',
  }
}));


export default function SpriteView(props) {
  const classes = useStyles();
  
  //85 x 55
  return (
    <div className={classes.root} style={{ width: props.size.x, height: props.size.y }}>
      <img 
        className={classes.image} src={props.spriteSheet} 
        style={{ width: props.size.x * 11, height: props.size.y * 1, 
        marginLeft: -(props.size.x * props.currentSprite.x),
        marginTop: -(props.size.y * props.currentSprite.y) }}/>
    </div>
  )
}