import * as React from "react";
import { connect } from "react-redux";

const nameSpecific = [
  { name: "Производитель", key: "brand" },
  { name: "Год", key: "year" },
  { name: "Диагональ экрана (дюйм)", key: "diagonal" },
  { name: "Страна-производитель", key: "made" },
  { name: "Объём памяти", key: "memory" },
  { name: "Частота обновления экрана", key: "gz" },
  { name: "Поддержка беспроводной зарядки зарядка", key: "wirelessСharging" },
  { name: "Поддержка eSim", key: "eSim" },
  { name: "NFC", key: "nfc" },
  { name: "Цена", key: "price" },
];

const Specific = ({ phoneShow }: any) => {
  //

  const mapSpecific = nameSpecific.map((e: any, index: any) => {
    const mapContent = phoneShow.map((item: any) => {
      let tag = <p className="specific__content">{item[e.key]}</p>;
      if (typeof item[e.key] == "boolean") {
        const src = require(`../../images/icon-${item[e.key]}.png`);
        tag = <img src={src} className="specific__content-image" />;
      }
      return tag;
    });
    return (
      <li key={index + 1} className="specific__row">
        <p className="specific__title">{e.name}:</p> {mapContent}
      </li>
    );
  });

  return (
    <section className="specific">
      <ul className="specific__list">{mapSpecific}</ul>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentCount: state.currentCount,
    phoneShow: state.phoneShow,
    maxDevices: state.maxDevices,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Specific);
