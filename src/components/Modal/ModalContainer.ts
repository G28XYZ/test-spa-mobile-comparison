import Modal from "./Modal";
import { connect } from "react-redux";
import { closeModal, switchPhone, onFilterPhone } from "../../redux/actions";

const mapStateToProps = (state: any) => {
  return {
    modalIsOpen: state.modalIsOpen,
    phoneHidden: state.phoneHidden,
    currentCount: state.currentCount,
    maxDevices: state.maxDevices,
    positionModal: state.positionModal,
    filterText: state.filterText,
  };
};

const mapDispatchToProps = {
  switchPhone,
  onFilterPhone,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
