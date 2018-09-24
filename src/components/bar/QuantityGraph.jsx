import React from "react";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";

const QuantityGraph = (props) => {
  // console.log('quantityGraph', props.data);
  return (
    <ResponsiveContainer width="100%" aspect={4.0/3.0}>
      <BarChart data={props.data} 
        margin={{top: 20, bottom: 5}}
        barCategoryGap={50}
        barGap={1}  
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884d8" />
        <Bar dataKey="averageDrinkRating" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default QuantityGraph;