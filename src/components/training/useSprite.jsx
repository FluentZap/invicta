import React, { useState, useEffect } from 'react';
import { playerAnimations } from '../../store'


function getStartAnimation(name) {
  return {
    animation: name,
    index: 0,
    time: 0,
    sprite: playerAnimations[name].frames[0],
    running: true
  }
}

export default function useSprite(StartingAnimation) {
  const [sprite, setSprite] = useState(getStartAnimation(StartingAnimation));
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

  return [sprite, (SpriteName) => {
    setSprite(getStartAnimation(SpriteName))
  }]
}



