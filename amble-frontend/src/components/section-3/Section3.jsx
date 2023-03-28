import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import Card from './Card'
import itemsImg from '../../assets/section-3-items.png'
import classes from './section3.module.css'

export default function Section3() {

  const cards = [
    {
      icon: icon1, alt:'lorem', h2: 'Import all your contacts easily', p: 'See all your contacts in one place. Import your contacts from LinkedIn, iCloud, Gmail, and more.'
    },
    {
      icon: icon2, alt:'lorem', h2: 'Reminders', p: 'Never forget important dates and reach out at the right time. We’ll give you a nudge.'
    },
    {
      icon: icon3, alt:'lorem', h2: 'Keep notes', p: 'Remember your connections and interactions. Pick up where you left of, never forget important details.'
    },
    {
      icon: icon4, alt:'lorem', h2: 'Order them into groups', p: 'Organize your relationships in groups, separate work and play.'
    },
  ];

  return (
    <div className={classes.section3}>
      <div className={`container ${classes.grid}`}>
        <div className={classes.first}>
          <div className={classes.title}>
            <h1>Stay organized and productive</h1>
            <p>Seamlessly manage your personal relationships and professional connections in one place, jot down a note or look up where you left off, just at the right time and set reminders to stay in touch with Amble.</p>
          </div>
          <div className={classes.itemsImg}>
            <img src={itemsImg} alt="" />
          </div>
        </div>
        <div className={classes.cards}>
          {cards.map((el) => <Card card={el} />)}
        </div>

      </div>
    </div>
  )
}
