import * as React from "react";
import ModalSearch from "./common/ModalSearch";
import ModalPhoneList from "./common/ModalPhoneList";
//
class Modal extends React.Component<any> {
  //
  _handleCloseByEsc = (evt: any) => {
    evt.key == "Escape" && this.removeListeners();
  };

  _handleCloseByOverlay = (evt: any) => {
    if (evt.target.className.includes("modal")) {
      return;
    }
    if (evt.target.className != "devices__phone-button") {
      this.removeListeners();
      return;
    } else if (!this.props.modalIsOpen) {
      this.removeListeners();
      return;
    }
  };

  removeListeners = () => {
    this.props.closeModal();
    document.removeEventListener("keydown", this._handleCloseByEsc);
    document.removeEventListener("click", this._handleCloseByOverlay);
  };

  render() {
    //
    const {
      modalIsOpen,
      phoneHidden,
      currentCount,
      switchPhone,
      maxDevices,
      positionModal,
      onFilterPhone,
      filterText,
    } = this.props;
    //
    if (modalIsOpen) {
      document.addEventListener("keydown", this._handleCloseByEsc);
      document.addEventListener("click", this._handleCloseByOverlay);
    }

    const styles: any = {
      ".modal": {
        left: positionModal + "px",
      },
    };
    return (
      <div
        style={styles[".modal"]}
        className={
          modalIsOpen && currentCount < maxDevices
            ? "modal modal_open"
            : "modal"
        }
      >
        <ModalSearch props={[filterText, phoneHidden, onFilterPhone]} />
        <ModalPhoneList
          props={[phoneHidden, switchPhone, this.removeListeners]}
        />
      </div>
    );
  }
}

export default Modal;
