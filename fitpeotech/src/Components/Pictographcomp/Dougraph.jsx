import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styles from "./dounut.module.css"

const data = [
  {
    name: 'Group A',
    value: 400
  },
  {
    name: 'Group B',
    value: 300 
  },
  {
    name: 'Group C',
    value: 300
  },
];

const Colors = ['crimson', '#8884d8', 'blueviolet'];

const Dougraph = () => {
  return (
    <div id={styles.donoutcont}>
      <h4>Coustomer</h4>
      <h6>Coustomer that buy Products</h6>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={8}
            dataKey="value"
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
            ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Dougraph