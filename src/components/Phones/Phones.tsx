import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setCountItem, openModal } from "../../redux/actions";

const phoneItem = (phone: any, index: number, currentCount: number, openModal: any) => {
  return (
    <li key={index + 1} className="devices__phone">
      <div className="device__phone-block">
        <img src={phone.image} alt={phone.name} className="devices__phone-image" />
        {currentCount < 6 ? (
          <button className="devices__phone-button" onClick={openModal}></button>
        ) : null}
      </div>
      <p className="devices__phone-title">{phone.name}</p>
    </li>
  );
};

class Phones extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.setCountItem(this.props.currentCount);
  }

  render(): React.ReactNode {
    const { phoneShow, currentCount, openModal } = this.props;
    console.log("phones");
    const mapPhones = phoneShow.map((phone: any, index: number) => {
      return phoneItem(phone, index, currentCount, openModal);
    });
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
  };
};

const mapDispatchToProps = {
  setCountItem,
  openModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Phones);
