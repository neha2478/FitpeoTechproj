import React from 'react';
import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell} from 'recharts';

import styles from "./bargraph.module.css"

const Array = [
  {
    mon: "Jan",
    earnings: 13,
  },
  {
    mon: "Feb",
    earnings: 12,
  },
  {
    mon: "Mar",
    earnings: 10,
  },
  {
    mon: "Apr",
    earnings: 15
  },
  {
    mon: "Jun",
    earnings: 5
  },
  {
    mon: "Jly",
    earnings: 13
  }
  ,{
    mon: "Aug",
    earnings: 8
  },
  {
    mon: "Sep",
    earnings: 13
  },
  {
    mon: "Oct",
    earnings: 13
  },
  {
    mon: "Nov",
    earnings: 13
  },
  {
    mon: "Dec",
    earnings: 7
  }
]


const Barcolor = ["lightblue", "lightblue", "lightblue", "lightblue", "lightblue", "lightblue", "lightblue", "blueviolet", "lightblue", "lightblue", "lightblue", "lightblue"];


const Bargraph = () => {
  return(
    <div id={styles.graphbarcont}>
      <div id={styles.head}>
        <h1>Overview</h1>
        <select class="form-select" aria-label="Default select example" id={styles.select}>
          <option selected>Quaterly</option>
          <option value="1">Jan-Mar</option>
          <option value="2">Apr-Jun</option>
          <option value="3">Jul-Sep</option>
          <option value="3">Oct-Dec</option>
        </select>
      </div>
      <div id={styles.graphA}>
        <ResponsiveContainer width="70%" aspect={2} id={styles}>
          <BarChart data={Array} width={100} height={300} margin={{top:5, right:20, left:0, bottom:5}}>
            <XAxis dataKey="mon"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="earnings" fll="#8884d8" barSize={15} minPointSize={5}>
            {Array.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={Barcolor[index % Barcolor.length]} />
            ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <h3 id={styles.head2}>Earnings</h3>
      </div>
    </div>
  )
};

export default Bargraph;
