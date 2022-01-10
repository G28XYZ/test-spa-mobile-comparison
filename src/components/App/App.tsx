import * as React from "react";
import Header from "../Header/Header";
import Devices from "../Devices/Devices";
import "./style.css";

const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Devices />
      </main>
    </div>
  );
};

export default App;
