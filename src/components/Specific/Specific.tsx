import * as React from "react";
import { connect } from "react-redux";

const nameSpecific = [
  { name: "Производитель", key: "brand" },
  { name: "Год релиза", key: "year" },
  { name: "Диагональ экрана (дюйм)", key: "diagonal" },
  { name: "Страна-производитель", key: "made" },
  { name: "Объём памяти", key: "memory" },
  { name: "Частота обновления экрана", key: "gz" },
  { name: "Поддержка беспроводной зарядки зарядка", key: "wirelessСharging" },
  { name: "Поддержка eSim", key: "eSim" },
  { name: "NFC", key: "nfc" },
  { name: "Цена", key: "price" },
];

const Specific = ({ phoneShow, onChecked }: any) => {
  //

  const mapSpecific = nameSpecific.map((e: any, index: any) => {
    if (onChecked) {
      const element = phoneShow[0][e.key];
      const filter = phoneShow.every((c: any) => c[e.key] == element);
      if (filter) {
        return null;
      }
    }
    const mapContent = phoneShow.map((item: any, i: number) => {
      let tag = (
        <p key={i.toString()} className="specific__content">
          {item[e.key]}
        </p>
      );
      if (typeof item[e.key] == "boolean") {
        const src = require(`../../images/icon-${item[e.key]}.png`);
        tag = <img key={i.toString()} src={src} className="specific__content-image" />;
      }
      return tag;
    });

    return (
      <li key={index.toString()} className="specific__row">
        <p className="specific__title">{e.name}</p> {mapContent}
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
    phoneShow: state.phoneShow,
    onChecked: state.onChecked,
  };
};

export default connect(mapStateToProps)(Specific);
