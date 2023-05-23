import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data02 = [
  { name: 'Nasi Goreng', value: 2400 },
  { name: 'Ayam Goreng', value: 4567 },
  { name: 'Sate Ayam', value: 1398 },
  { name: 'Capucinno', value: 9800 },
  { name: 'Dawet', value: 3908 },
  { name: 'Es Teh', value: 4800 },
];

const MenuChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
        <Pie 
            dataKey="value" 
            data={data02} 
            cx={440} 
            cy={180} 
            innerRadius={40} 
            outerRadius={80} 
            fill="#82ca9d" 
            label
        />
        <Tooltip />
        </PieChart>
    </ResponsiveContainer>
  )
}

export default MenuChart

