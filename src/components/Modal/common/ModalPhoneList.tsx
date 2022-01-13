import * as React from "react";

const ModalPhoneList = ({
  props: [phoneHidden, switchPhone, removeListeners],
}: any) => {
  return (
    <ul className="modal__phone-list">
      {phoneHidden.map((phone: any, index: number) => (
        <li key={index + 1} className="modal__item">
          <button
            className="modal__item-switch"
            onClick={() => {
              switchPhone(phone.id);
              removeListeners();
            }}
          ></button>
          <img
            className="modal__item-image"
            src={phone.image}
            alt={phone.name}
          />
          <p className="modal__item-title">{phone.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default ModalPhoneList;
