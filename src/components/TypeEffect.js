import React from 'react'
import Typewriter from 'typewriter-effect';

export const TypeEffect = () => {
  return (
    <Typewriter
          options={{
            strings: ['Aspiring Software Developer', 'Software Engineering Student', 'Keyboard Hobbyist', 'Man Utd Fan', 'Gym Rat', 'Avid Gamer'],
            delay: 75,
            autoStart: true,
            loop: true,
            pauseFor: 2000,
            cursor: "_"
          }}
        />
  )
}
