import * as React from "react";
import { connect } from "react-redux";

const nameSpecific = [
  { name: "Наименование", key: "name" },
  { name: "Год", key: "year" },
  { name: "Страна производитель", key: "made" },
  { name: "Производитель", key: "brand" },
  { name: "NFC", key: "nfc" },
  { name: "eSim", key: "eSim" },
  { name: "Цена", key: "price" },
  { name: "Частоат экрана", key: "gz" },
  { name: "Диагональ", key: "diagonal" },
  { name: "Беспроводная зарядка", key: "wirelessСharging" },
  { name: "Объём памяти", key: "memory" },
];

const Specific = ({ phoneShow }: any) => {
  //

  const mapSpecific = nameSpecific.map((e: any, index: any) => {
    const mapContent = phoneShow.map((item: any) => {
      return <p>{item[e.key]}</p>;
    });
    return (
      <li key={index + 1} className="specific__row">
        {e.name}: {mapContent}
      </li>
    );
  });

  return (
    <section className="specific">
      <ul>{mapSpecific}</ul>
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
