import * as React from "react";
import CountPhones from "../CountPhones";
import PhonesContainer from "../Phones/PhonesContainer";

const Devices = () => {
  return (
    <section className="devices">
      <div className="devices__header">
        <h1 className="devices__title">Смартфоны</h1>
        <CountPhones />
      </div>
      <PhonesContainer />
    </section>
  );
};

export default Devices;
