import React from 'react';
import styles from "./card.module.css";

const Eachcard = (props) => {

    let data1 = props.data;

    return(
        <div id={styles.outsidestyle}>
        {data1.map( (x) => {
            return(
                <div className={styles.card}>
                    <div id={styles.imgcont}>
                        <img src={x.image} alt="myPic" height={100} width={90}/>
                    </div>
                    <div id={styles.aboutcard}>
                        <h4>{x.cardname}</h4>
                        <h3 style={{color:"red", fontSize:"1.5rem"}}>{x.cost}</h3>
                        <h3 style={{fontSize:"0.9rem"}}>{x.incpercent}</h3>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Eachcard;