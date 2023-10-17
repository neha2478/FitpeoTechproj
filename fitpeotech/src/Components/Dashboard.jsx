import React from 'react'
import Cardshow from './Card folder/Cardshow'
import styles from "./dashboard.module.css"
import Bargraph from './Barcomp/Bargraph';
import Dougraph from './Pictographcomp/Dougraph';

// import { FaRegHandPaper } from "react-icons/fa";


const Dashboard = () => {
  return (
    <>
      <div id={styles.dashboardcont}>
        <div>
          <h1 id={styles.myname}>Hello  Shruti!!</h1>
          <Cardshow/>
        </div>
        <div id={styles.graphcont}>
          <div id={styles.bgraph}>
            <Bargraph/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
