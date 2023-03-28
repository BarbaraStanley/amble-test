import React from 'react'
import classes from './Content.module.css'

export default function Content() {
  return (
    <div className={`container ${classes.content}`}>
      <div className={classes.textBlock}>
        <h1>
          Welcome to seamless contact management
        </h1>
        <p>
          Amble streamlines your contacts into one centralized hub, making it easy for you to manage and organize your connections. Remember those who matter. Say goodbye to scattered contacts and welcome a more organized and efficient way of managing your connections. Save time, stay productive
        </p>
      </div>
      <div className={classes.space}>
        {/* <img src={heroImg} alt="" /> */}
      </div>

    </div>
  )
}
