import React from 'react'
import '../../utils.css'
import classes from './Navbar.module.css'


export default function Navbar() {
  console.log(classes.Navbar)
  console.log(classes)
  return (
    <div className={`container ${classes.Navbar}`}>
      <div className={classes.title}>AMBLE</div>
      <ul className={classes.listBlock}>
        <li className={`${classes.active} ${classes.listItem}`}>Home</li>
        <li className={classes.listItem}>About</li>
        <li className={classes.listItem}>Features</li>
        <li className={classes.listItem}>Contact</li>
        <li className={classes.listItem}>Blog</li>
        <li className={classes.listItem}>Login/Signup</li>
      </ul>
    </div>
  )
}
