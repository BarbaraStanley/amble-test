import React from 'react'
import Navbar from './Navbar'
import classes from './hero.module.css'
import Content from './Content'
import heroImg from '../../assets/hero-image.png'


export default function Hero() {
  return (
    <div className={classes.hero}>
      <Navbar />
      <Content />
      <div className={classes.img}>
        <img src={heroImg} alt="" />
        <div className={classes.circle}></div>
      </div>
    </div>
  )
}
