import React from "react";
import Stock from "./Stock";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Sidelist from "./component/Sidelist";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Stock />
      <Sidelist />
    </div>
  );
}

export default App;
