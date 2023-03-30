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
        <li className={classes.listItem}><a href="#">About</a></li>
        <li className={classes.listItem}><a href="#">Features</a></li>
        <li className={classes.listItem}><a href="#">Contact</a></li>
        <li className={classes.listItem}><a href="#">Blog</a></li>
        <li className={classes.listItem}><a href="#">Login/SignUp</a></li>
      </ul>
    </div>
  )
}
