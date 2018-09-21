import React from "react";
import styled from "styled-components";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const data = [
  {name: "drink1", price: 13, quantity: 2, totalSales: 26, avgRating: 4},
  {name: "drink2", price: 5, quantity: 20, totalSales: 100, avgRating: 2},
  {name: "drink3", price: 200, quantity: 2, totalSales: 400, avgRating: 5},
];

const stats =[
  {name: "John", totalStars: "120", reviewCounts: 13}
]

const StatsGraphs = () => {
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
    super(props)
    this.state = {
      view: "quantity"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  renderView() {
    const {view} = this.state;
    console.log('inside renderView=', view);
    if(view === "quantity") {
      return <div>View 1</div>
    } else {
      return <div>View 2</div>
    }
  }

  handleChange(e) {
    console.log(e.target.value);
    console.log(this)
    this.setState({
      view: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <SelectWrapper>
          <label htmlFor="sortBy">
            <span>Sorted By:</span>{"\t"}
            <select value={this.state.view} 
              onBlur={this.handleChange}
              onChange={this.handleChange}>
              <option value="quantity">Quantity</option>
              <option value="rating">Customer Rating</option>
            </select>
          </label>
        </SelectWrapper>
        <div>{this.renderView()}</div>
      </div>
    )
  }
}

export default BarStats;