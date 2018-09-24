import React from "react";
import styled from "styled-components";
import QuantityGraph from "./QuantityGraph.jsx";
import RatingGraph from "./RatingGraph.jsx";
import axios from "axios";

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
      view: "quantity",
      data: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const unsorted = [];
    axios.get("/api/stats")
      .then((res) => {
        const data = res.data;
        for (const key in data) {
          data[key].averageDrinkRating = data[key].drinkQuality / data[key].quantity;
          data[key].averageDrinkRating = data[key].averageDrinkRating.toFixed(2);
          unsorted.push(data[key]);
        }
      })
      .then(() => {
        this.setState({
          data: unsorted,
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  sortByKey(arr, key) {
    return arr.sort((a, b) => {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? 1 : (x > y) ? -1 : 0);
    })
  }

  renderView() {
    const {view, data} = this.state;
    const quantityData = this.sortByKey(data.slice(0), 'quantity');
    const ratingData = this.sortByKey(data.slice(0), 'averageDrinkRating');
    // console.log('quantity', quantityData.slice(0, 10));
    // console.log('ratingData', quantityData.slice(0, 10);
    if (view === "quantity") {
      return (
        <GraphWrapper>
          <QuantityGraph data={quantityData.slice(0, 10)}/>
        </GraphWrapper>
      )
    } else {
      return (
        <GraphWrapper>
          <RatingGraph data={ratingData.slice(0, 10)} />
        </GraphWrapper>
      )
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