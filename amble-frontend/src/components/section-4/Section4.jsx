import React from 'react'
import img from '../../assets/section-4.png'
import classes from './section4.module.css'

export default function Section4() {
  return (
    <div className={`container ${classes.section4}`}>
      <div>
        <h1>Work with us</h1>
        <p>We are looking for passiobnate and talented  developers, sales and business talents, and content creators to join us to continue building and improving  this product. Lorem ipsum.</p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
