import * as React from "react";
import CountPhones from "../CountPhones/CountPhones";
import Phones from "../Phones/Phones";

const Devices = () => {
  return (
    <section className="devices">
      <div className="devices__header">
        <h1 className="devices__title">Смартфоны</h1>
        <CountPhones />
      </div>
      <Phones />
    </section>
  );
};

export default Devices;
