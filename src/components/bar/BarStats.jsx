import React from "react";
import styled from "styled-components";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";


const data = [
  {name: "drink1", price: 13, quantity: 2, totalSales: 26, avgRating: 4},
  {name: "drink2", price: 5, quantity: 20, totalSales: 100, avgRating: 2},
  {name: "drink3", price: 200, quantity: 2, totalSales: 400, avgRating: 5},
];

const stats =[
  {name: "John", totalStars: "120", reviewCounts: 13}
]

const StatsGraphs = props => {
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
        <Bar dataKey="quantity" fill="#8884d8" />
        <Bar dataKey="totalSales" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

class BarStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

export default StatsGraphs;