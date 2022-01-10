import * as React from "react";
import CountDevices from "./common/CountDevices";
import "./style.css";

const Devices = () => {
  return (
    <section className="devices">
      <div className="devices__header">
        <h1 className="devices__title">Смартфоны</h1>
        <CountDevices />
      </div>
    </section>
  );
};

export default Devices;
