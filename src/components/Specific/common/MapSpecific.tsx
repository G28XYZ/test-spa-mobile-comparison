import * as React from "react";
import { nameSpecific } from "./nameSpecific";

const MapSpecific = (phoneShow: any, onChecked: boolean) => {
  return nameSpecific.map((e: any, index: any) => {
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
        const src = require(`../../../images/icon-${item[e.key]}.png`);
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
};

export default MapSpecific;
