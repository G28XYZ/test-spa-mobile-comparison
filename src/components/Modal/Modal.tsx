import * as React from "react";
import { connect } from "react-redux";

const Modal = ({ modal }: any) => {
  return (
    <div className={modal ? "modal modal_open" : "modal"}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps)(Modal);
