import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="stock_symbols">
          <h4 id="sidebar_heading">Popluar Stock Symbols</h4>
          <ul className="stock_list">
            <li>Apple Inc. - AAPL </li>
            <li>Microsoft Corporation - MSFT </li>
            <li>International Business Machines Corporation - IBM </li>
            <li>Coca-Cola Company - KO </li>
            <li>Tata Consultancy Services - TCS </li>
            <li>Google Inc. - GOOG </li>
            <li>Tesla Motors, Inc. - TSLA </li>
            <li>Zoom Technologies Inc. - ZOOM </li>
            <li>Facebook Inc. - FB </li>
            <li>Walmart Inc. - WMT </li>
            <li>Procter & Gamble Co. - PG </li>
            <li>Johnson & Johnson - JNJ</li>
            <li>Nvidia CORP - NVDA</li>
            <li>JPMorgan Chase & co. - JPM</li>
            <li>Netflix Inc. - NFLX</li>
            <li>Intel Corp - INTC</li>
            <li>Ford MTR Co Del - F</li>
            <li>UXIN limited - UXIN</li>
            <li>AT&T - T</li>
            <li>Nokia - NOK</li>
            <li>Wells Fargo & Co - WFC</li>
            <li>UBER Technologies Inc - UBER</li>
            <li>Infosys Ltd - INFY</li>
            <li>Verizon Corp - VZ</li>
            <li>Advanced Micro Devices Inc - AMD</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
