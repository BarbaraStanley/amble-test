import React from 'react'
import img from '../../assets/section-2.png'
import classes from './section2.module.css'
import '../../utils.css'

export default function Section2() {
  return (
    <div className={`container ${classes.section2}`}>
      <div>
        <img src={img} alt="" />
      </div>
      <div className={classes.text}>
        <h1>Amble is your sorted contact hub</h1>
        <p>Build stronger relationships with Amble. When life gets busy, Amble helps you reach out at the right time, and always keep in touch.</p>
      </div>
    </div>
  )
}
