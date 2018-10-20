import React from "react";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";

const RatingGraph = (props) => {
  // console.log('rating graph', props.data);
  return (
    <ResponsiveContainer width="100%" aspect={4.0/3.0}>
      <BarChart data={props.data} 
        margin={{top: 20, bottom: 5}}
        barCategoryGap={10}
        barGap={1}  
      >
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Legend />
        <Bar dataKey="averageDrinkRating" fill="#82ca9d" />
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingGraph;