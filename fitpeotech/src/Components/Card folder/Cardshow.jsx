import React from 'react'
import Eachcard from './Eachcard';
import cardData from "./Data.json"
import styles from "./card.module.css"

const Cardshow = () => {
  return (
    <div id={styles.cardbox}>
      <Eachcard data={cardData}/>
    </div>
  )
}

export default Cardshow
