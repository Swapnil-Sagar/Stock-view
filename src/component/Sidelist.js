import React, { Component } from "react";

class Sidelist extends Component {
  render() {
    return (
      <div id="sidelist">
        <div className="stock_symbols">
          <h4 className="sidelist_heading">Some Handy Stuffs</h4>
          <div className="button_cont" align="left">
            <a
              className="example_a"
              href="https://www.tradinggraphs.com/downloads/US-Stock-Symbols.xlsx"
            >
              Full Stock-Symbols CSV
            </a>
          </div>
          <div className="learn_sites">
            <h4>Want to learn about STOCKS</h4>
            <a
              className="sidelist-brand"
              href="https://www.investopedia.com/stocks-4427785"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/investopedia.png"
                style={{ width: "80%", height: "100%", padding: "10px" }}
                alt="404"
              />
            </a>
            <a
              className="navbar-brand"
              href="https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/nerdwallet.png"
                style={{ width: "80%", height: "100%", padding: "10px" }}
                alt="404"
              />
            </a>
            <a
              className="navbar-brand"
              href="https://www.trakinvest.com/#trak-show"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/trakinvest.png"
                style={{ width: "80%", height: "100%", padding: "10px" }}
                alt="404"
              />
            </a>
          </div>
        </div>

        <img
          className="navbar-gif"
          src="https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif"
          style={{ width: "99%", height: "auto" }}
          alt="404"
        />

        <div>
          <a href="https://github.com/Swapnil-Sagar/Stock-view#">
            <img
              className="navbar-git"
              src="/img/github.png"
              style={{ width: "18%", height: "auto" }}
              alt="404"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidelist;
