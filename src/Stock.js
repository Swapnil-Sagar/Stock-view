import React, { Component } from "react";
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

let stockName = "MSFT";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      stockChartXValues: [],
      stockChartYValues: [],
      stkName: stockName,
    };
    //get the changes from the form field and change the stock symbol in the 'demo' span
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //changes the new stock symbol, prevents page from refreshing to default
    const cat = (document.getElementById("demo").innerHTML = this.state.value);
    stockName = cat;
    this.setState.value = cat;
    this.fetchStock();
    event.preventDefault();
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "MZ42WBP783C2TXAB";
    // let StockSymbol = "FB";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        //gets the variables for the X and Y data
        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
          //console.log(key);
        }

        //console.log(stockChartXValuesFunction);
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });

        //Gets the stock symbol
        //if no data, a message is sent to user

        if (!stockName) {
          document.getElementById("demo").innerHTML =
            "Nothing available at this time";
        }
      });
  }

  render() {
    return (
      <div className="App">
        <br />

        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit" className="form-control btn btn-whatever">
              Select Stock
            </button>
          </form>
        </div>
        <h1>STOCK VIEW</h1>
        <h4>
          Stock Symbol: <span id="demo">MSFT</span>
        </h4>

        <Plot
          data={[
            {
              //labels

              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ width: 720, height: 440, title: "Alphavantage Data Chart" }}
        />
        <h2>Made By: Swapnil Sagar</h2>
      </div>
    );
  }
}

export default Stock;
