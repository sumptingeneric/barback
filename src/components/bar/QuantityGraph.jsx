import React from "react";
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";

const QuantityGraph = (props) => {
  return (
      <BarChart data={props.data} 
        margin={{top: 20, bottom: 5}}
        barCategoryGap={50}
        barGap={1}
        width={600}
        height={300}  
      >
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884d8" />
        <Bar dataKey="drinkQuality" fill="#82ca9d" />
      </BarChart>
  );
};

export default QuantityGraph;