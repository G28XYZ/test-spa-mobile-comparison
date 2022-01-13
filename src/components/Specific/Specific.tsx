import * as React from "react";
import { connect } from "react-redux";
import MapSpecific from "./common/MapSpecific";

interface props {
  phoneShow: any;
  onChecked: boolean;
}

const Specific = ({ phoneShow, onChecked }: props) => {
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
