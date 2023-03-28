import React from 'react'
import classes from './section3.module.css'

export default function Card({card}) {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>
        <img src={card.icon} alt={card.alt} />
      </div>
      <div className={classes.text}>
        <h2>{card.h2}</h2>
        <p>{card.p}</p>
      </div>
    </div>
  )
}
