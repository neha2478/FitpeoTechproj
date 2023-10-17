import React from 'react'
import Mainbar from "./Mainbar.jsx";
import Sidebar from "./Sidebar.jsx";

import styles from "./navbar.module.css";

const Barcomp = () => {
  return (
    <section>
        <article id={styles.art}>
            <Sidebar/>
            <Mainbar/>
        </article>
    </section>
  )
}

export default Barcomp
