import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setCountItem, openModal, setPosition } from "../../redux/actions";

const phoneItem = (
  phone: any,
  currentCount: number,
  openModal: any,
  maxDevices: number,
  setPosition: any
) => {
  //

  const calcPositionModal = (evt: any) => {
    const widthModal = 450;
    const innerWidth = evt.view.innerWidth;
    const pageX = evt.pageX;
    const correctOnPage = innerWidth > 1100 ? innerWidth / 2 - widthModal : 0;
    const correctBefore =
      widthModal + pageX < innerWidth ? 0 : widthModal + pageX - innerWidth;

    return pageX - correctBefore - correctOnPage;
  };

  let btn = (
    <button
      className="devices__phone-button"
      onClick={(evt) => {
        openModal(phone.id);
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

//

class Phones extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.setCountItem(this.props.currentCount);
  }

  render(): React.ReactNode {
    const { phoneShow, currentCount, openModal, maxDevices, setPosition } =
      this.props;
    const mapPhones = phoneShow.map((phone: any) => {
      return phoneItem(phone, currentCount, openModal, maxDevices, setPosition);
    });

    //

    return (
      <div className="devices__items">
        <div className="devices__different">
          <input type="checkbox" />
          Показать различия
        </div>
        <ul className="devices__phone-list">{mapPhones}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentCount: state.currentCount,
    phoneShow: state.phoneShow,
    maxDevices: state.maxDevices,
  };
};

const mapDispatchToProps = {
  setCountItem,
  openModal,
  setPosition,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Phones);
