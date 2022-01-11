import * as React from "react";
import CountPhones from "./common/CountPhones";
import Phones from "./common/Phones";
import "./style.css";

const Devices = () => {
  return (
    <section className="devices">
      <div className="devices__header">
        <h1 className="devices__title">Смартфоны</h1>
        <CountPhones />
      </div>
      <div>
        <Phones />
      </div>
    </section>
  );
};

export default Devices;
