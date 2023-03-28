import React from 'react'
import classes from './section3.module.css'

export default function Items({item}) {
  return (
    <div className={classes.item}>
      <div className={classes.ico1}></div>
      <div className={classes.subject}>
        <p className={classes.sub}></p>
        <p className={classes.time}></p>
      </div>
      <div className={classes.ico2}></div>
      <div className={classes.ico3}></div>
    </div>
  )
}
