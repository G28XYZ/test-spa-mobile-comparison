import * as React from "react";
import Header from "../Header";
import Devices from "../Devices";
import Modal from "../Modal";
import Specific from "../Specific";

const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Devices />
        <Specific />
      </main>
      <Modal />
    </div>
  );
};

export default App;
