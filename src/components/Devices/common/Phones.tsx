import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setCount } from "../../../redux/actions";

class Phones extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.setCount(3);
  }

  render(): React.ReactNode {
    const { phones } = this.props;
    console.log("phones");
    const mapPhones = phones.map((phone: any, i: number) => {
      return (
        <li key={i + 1} className="devices__phone">
          <img
            src={phone.image}
            alt={phone.name}
            className="devices__phone-image"
          />
          <p className="devices__phone-title">{phone.name}</p>
        </li>
      );
    });
    return <ul className="devices__phone-list">{mapPhones}</ul>;
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
