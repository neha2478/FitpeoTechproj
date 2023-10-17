import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from "./navbar.module.css"
const Mainbar = () => {
  return (
    <div id={styles.out}>
      <Outlet/>
    </div>
  )
}

export default Mainbar
