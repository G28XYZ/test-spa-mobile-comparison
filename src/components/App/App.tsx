import * as React from "react";
import Header from "../Header";
import Devices from "../Devices";
import ModalContainer from "../Modal/ModalContainer";
import Specific from "../Specific";

const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Devices />
        <Specific />
      </main>
      <ModalContainer />
    </div>
  );
};

export default App;
