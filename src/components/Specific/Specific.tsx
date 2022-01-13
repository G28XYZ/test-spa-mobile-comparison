import * as React from "react";
import { connect } from "react-redux";
import MapSpecific from "./common/MapSpecific";

const Specific = ({ phoneShow, onChecked }: any) => {
  //
  return (
    <section className="specific">
      <ul className="specific__list">{MapSpecific(phoneShow, onChecked)}</ul>
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
