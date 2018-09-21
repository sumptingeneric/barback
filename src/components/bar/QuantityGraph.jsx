import React from "react";
// import styled from "styled-components";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";

const data = [
  {name: "drink2", price: 5, Quantity: 20, totalSales: 100, AverageRating: 2},
  {name: "drink1", price: 13, Quantity: 2, totalSales: 26, AverageRating: 4},
  {name: "drink3", price: 200, Quantity: 2, totalSales: 400, AverageRating: 5},
];

const QuantityGraph = () => {
  return (
    <ResponsiveContainer width={600} height={300}>
      <BarChart data={data} 
        margin={{top: 20, bottom: 5}}
        barCategoryGap={50}
        barGap={1}  
      >
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Quantity" fill="#8884d8" />
        <Bar dataKey="AverageRating" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default QuantityGraph;