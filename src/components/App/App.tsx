import * as React from "react";
import Header from "../Header/Header";
import Devices from "../Devices/Devices";
import Modal from "../Modal/Modal";

const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Devices />
      </main>
      <Modal />
    </div>
  );
};

export default App;
