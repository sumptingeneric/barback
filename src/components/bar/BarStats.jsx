import React from "react";
import styled from "styled-components";
import QuantityGraph from "./QuantityGraph.jsx";

const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
`;

const GraphWrapper = styled.div`
  display: block;
  margin: 20px auto;
  background-color: azure;
`;

const GraphHeader = styled.h3`
  text-align: center;
  font-size: 25px;
  font-family: sans-serif;  
`;

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
    if(view === "quantity") {
      return (
        <GraphWrapper>
          <QuantityGraph />
        </GraphWrapper>
      )
    } else {
      return <div>View 2</div>
    }
  }

  handleChange(e) {
    this.setState({
      view: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <GraphHeader>
          Top 10 Menu Items
        </GraphHeader>
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