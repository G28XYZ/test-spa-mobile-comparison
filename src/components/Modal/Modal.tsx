import * as React from "react";
import { connect } from "react-redux";
import { openModal, switchPhone } from "../../redux/actions";
class Modal extends React.Component<any> {
  _handleCloseByEsc = (evt: any) => {
    evt.key == "Escape" && this._removeListeners();
  };

  _removeListeners = () => {
    this.props.openModal();
    document.removeEventListener("keydown", this._handleCloseByEsc);
  };

  render() {
    const { modal, phoneHidden, currentCount, switchPhone } = this.props;
    if (modal) {
      document.addEventListener("keydown", this._handleCloseByEsc);
    }
    return (
      <div className={modal && currentCount < 6 ? "modal modal_open" : "modal"}>
        <input type="text" className="modal__search" placeholder="Поиск" />
        <ul className="modal__phone-list">
          {phoneHidden.map((phone: any) => (
            <li key={phone.id + 1} className="modal__item">
              <button className="modal__item-switch" onClick={() => switchPhone(phone.id)}></button>
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
  };
};

const mapDispatchToProps = {
  openModal,
  switchPhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
