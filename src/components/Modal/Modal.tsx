import * as React from "react";
import { connect } from "react-redux";
import { openModal, switchPhone, setCountItem, onFilterPhone } from "../../redux/actions";

//
class Modal extends React.Component<any> {
  //
  _handleCloseByEsc = (evt: any) => {
    evt.key == "Escape" && this._removeListeners();
  };

  _handleCloseByOverlay = (evt: any) => {
    if (evt.target.className.includes("modal")) {
      return;
    }
    if (evt.target.className != "devices__phone-button") {
      this._removeListeners();
      return;
    } else if (!this.props.modal) {
      this._removeListeners();
      this.props.openModal();
      return;
    }
  };

  _removeListeners = () => {
    this.props.openModal();
    document.removeEventListener("keydown", this._handleCloseByEsc);
    document.removeEventListener("click", this._handleCloseByOverlay);
  };

  render() {
    //
    const {
      modal,
      phoneHidden,
      currentCount,
      switchPhone,
      setCountItem,
      openModal,
      maxDevices,
      positionModal,
      onFilterPhone,
      filterText,
    } = this.props;
    //
    if (modal) {
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
        className={modal && currentCount < maxDevices ? "modal modal_open" : "modal"}
      >
        <input
          type="text"
          value={filterText}
          className={currentCount <= 3 ? "modal__search modal__search_active" : "modal__search"}
          placeholder="Поиск"
          onChange={(evt: any) => onFilterPhone(evt.target.value)}
        />
        <ul className="modal__phone-list">
          {phoneHidden.map((phone: any, index: number) => (
            <li key={index + 1} className="modal__item">
              <button
                className="modal__item-switch"
                onClick={() => {
                  switchPhone(phone.id);
                  setCountItem(currentCount);
                  openModal(phone.id);
                }}
              ></button>
              <img className="modal__item-image" src={phone.image} alt={phone.name} />
              <p className="modal__item-title">{phone.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    modal: state.modal,
    phoneHidden: state.phoneHidden,
    currentCount: state.currentCount,
    maxDevices: state.maxDevices,
    positionModal: state.positionModal,
    filterText: state.filterText,
  };
};

const mapDispatchToProps = {
  openModal,
  switchPhone,
  setCountItem,
  onFilterPhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
