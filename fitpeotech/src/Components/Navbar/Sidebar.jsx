import React from 'react';

import { Link } from "react-router-dom";

import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { MdEmojiPeople } from "react-icons/md";
import { SiHelpdesk } from "react-icons/si";
import { TbIndentIncrease } from "react-icons/tb";
import styles from './navbar.module.css'

const Sidebar = () => {
  return (
    <>
        <section id={styles.sidebar}>
            <article id={styles.sidebarcont}>
                <div id={styles.sidebartitle}>
                    <div id={styles.title}>
                        <MdOutlineDashboard className={styles.iconheader}/>
                        <Link to='/'>Adm Dashboard</Link>
                    </div>
                </div>
                
                <ul>
                    <li>
                        <MdOutlineDashboard className={styles.icon}/>
                        <Link to={'/barcomp/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <MdOutlineProductionQuantityLimits className={styles.icon}/>
                        <Link to={'/barcomp/product'}>Product</Link>
                    </li>
                    <li>
                        <MdEmojiPeople className={styles.icon}/>
                        <Link to={'/barcomp/coustomer'}>Coustmer</Link>
                    </li>
                    <li >
                        <BiMoney className={styles.icon}/>
                        <Link to={'/barcomp/income'}>Income</Link>
                    </li>
                    <li >
                        <TbIndentIncrease className={styles.icon}/>
                        <Link to={'/barcomp/promote'}>Promote</Link>
                    </li>
                    <li>
                        <SiHelpdesk className={styles.icon}/>
                        <Link to={'/barcomp/help'}>Help</Link>
                    </li>
                </ul>
            </article>
        </section>
    </>
  )
}

export default Sidebar
