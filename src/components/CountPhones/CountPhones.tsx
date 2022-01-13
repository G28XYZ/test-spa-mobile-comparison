import * as React from "react";
import { connect } from "react-redux";
import { setCountItem } from "../../redux/actions";

interface props {
  currentCount: number;
  setCountItem: any;
  maxDevices: number;
}

const CountPhones = ({ currentCount, setCountItem, maxDevices }: props) => {
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
  return (
    <ul className="devices__count-list">
      <span>Отобразить товары:</span>
      {mapCount}
    </ul>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(CountPhones);
