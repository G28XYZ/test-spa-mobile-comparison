import * as React from "react";
import calcPositionModal from "./calcPositionModal";

const phoneItems = (
  phone: any,
  currentCount: number,
  maxDevices: number,
  setPosition: any,
  modalIsOpen: boolean,
  openModal: any,
  closeModal: any
) => {
  //

  let btn = (
    <button
      className="devices__phone-button"
      disabled={modalIsOpen ? true : false}
      onClick={(evt) => {
        modalIsOpen ? closeModal() : openModal(phone.id);
        setPosition(calcPositionModal(evt));
      }}
    ></button>
  );
  if (currentCount == maxDevices) {
    btn = null;
  }
  //
  return (
    <li key={phone.id + 1} className="devices__phone">
      <div className="device__phone-block">
        <img
          src={phone.image}
          alt={phone.name}
          className="devices__phone-image"
        />
        {btn}
      </div>
      <p className="devices__phone-title">{phone.name}</p>
    </li>
  );
};

export default phoneItems;
