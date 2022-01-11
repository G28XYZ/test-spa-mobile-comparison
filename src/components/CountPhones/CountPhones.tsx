import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setCount } from "../../redux/actions";

const CountPhones = ({ currentCount, setCount }: any) => {
  const maxCount = [2, 3, 4, 5, 6];
  const clazz = "devices__count";
  const mapCount = maxCount.map((num) => {
    return (
      <div
        key={num}
        className={
          num == currentCount ? `${clazz} ${clazz}_active` : `${clazz}`
        }
        onClick={() => setCount(num)}
      >
        {num}
      </div>
    );
  });
  return (
    <div className="devices__count-list">Отобразить товары: {mapCount}</div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentCount: state.currentCount,
  };
};

const mapDispatchToProps = {
  setCount,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CountPhones
);
