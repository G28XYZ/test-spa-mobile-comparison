import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setCount } from "../../redux/actions";

const phoneItem = (phone: any, index: number, currentCount: number) => {
  return (
    <li key={index + 1} className="devices__phone">
      <img
        src={phone.image}
        alt={phone.name}
        className="devices__phone-image"
      />
      {currentCount < 6 ? (
        <button className="devices__phone-button"></button>
      ) : null}
      <p className="devices__phone-title">{phone.name}</p>
    </li>
  );
};

class Phones extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.setCount(this.props.currentCount);
  }

  render(): React.ReactNode {
    const { phones, currentCount } = this.props;
    console.log("phones");
    const mapPhones = phones.map((phone: any, index: number) => {
      return phoneItem(phone, index, currentCount);
    });
    return (
      <div>
        Показать различия
        <input type="checkbox" />
        <ul className="devices__phone-list">{mapPhones}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentCount: state.currentCount,
    phones: state.phones,
  };
};

const mapDispatchToProps = {
  setCount,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Phones);
