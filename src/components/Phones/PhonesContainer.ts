import { connect } from "react-redux";
import {
  setCountItem,
  openModal,
  closeModal,
  setPosition,
  onChecked,
} from "../../redux/actions";
import Phones from "./Phones";

const mapStateToProps = (state: any) => {
  return {
    currentCount: state.currentCount,
    phoneShow: state.phoneShow,
    maxDevices: state.maxDevices,
    modalIsOpen: state.modalIsOpen,
  };
};

const mapDispatchToProps = {
  setCountItem,
  openModal,
  closeModal,
  setPosition,
  onChecked,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
