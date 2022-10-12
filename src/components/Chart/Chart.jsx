import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const Chart = ({topic}) => {
    console.log(topic)
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={topic}>
          <Bar dataKey={topic.total} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
};

export default Chart;