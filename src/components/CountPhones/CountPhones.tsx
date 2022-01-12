import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setCountItem } from "../../redux/actions";

const CountPhones = ({ currentCount, setCountItem, maxDevices }: any) => {
  const maxCount = [...Array(maxDevices)].map((_, i) => i + 1).slice(1);
  const clazz = "devices__count";
  const mapCount = maxCount.map((num) => {
    return (
      <li
        key={num}
        className={
          num == currentCount ? `${clazz} ${clazz}_active` : `${clazz}`
        }
        onClick={() => setCountItem(num)}
      >
        {num}
      </li>
    );
  });
  return <ul className="devices__count-list">Отобразить товары: {mapCount}</ul>;
};

const mapStateToProps = (state: any) => {
  return {
    currentCount: state.currentCount,
    maxDevices: state.maxDevices,
  };
};

const mapDispatchToProps = {
  setCountItem,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CountPhones
);
