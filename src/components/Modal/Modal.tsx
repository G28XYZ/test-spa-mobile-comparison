import * as React from "react";
import { connect } from "react-redux";

const Modal = ({ modal, phoneHidden }: any) => {
  return (
    <div className={modal ? "modal modal_open" : "modal"}>
      <input type="text" className="modal__search" placeholder="Поиск" />
      <ul className="modal__phone-list">
        {phoneHidden.map((phone: any) => (
          <li key={phone.id + 1} className="modal__item">
            <button className="modal__item-switch"></button>
            <img className="modal__item-image" src={phone.image} alt={phone.name} />
            <p className="modal__item-title">{phone.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    modal: state.modal,
    phoneHidden: state.phoneHidden,
  };
};

export default connect(mapStateToProps)(Modal);
