import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setCount } from "../../../redux/actions";

const CountDevices = ({ count, setCount }: any) => {
  const maxCount = [2, 3, 4, 5, 6];
  const mapCount = maxCount.map((num) => {
    return (
      <div
        key={num}
        className={num == count ? "devices__count_active" : "devices__count"}
        onClick={() => setCount(num)}
      >
        {num}
      </div>
    );
  });
  return <div className="devices__count-list">{mapCount}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  setCount,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(CountDevices);
