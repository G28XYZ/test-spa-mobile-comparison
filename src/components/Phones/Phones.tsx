import * as React from "react";
import phoneItems from "./common/phoneItems";

//

class Phones extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.setCountItem(this.props.currentCount);
  }

  render(): React.ReactNode {
    const {
      phoneShow,
      currentCount,
      maxDevices,
      setPosition,
      onChecked,
      modalIsOpen,
      openModal,
      closeModal,
    } = this.props;

    const mapPhones = phoneShow.map((phone: any) => {
      return phoneItems(
        phone,
        currentCount,
        maxDevices,
        setPosition,
        modalIsOpen,
        openModal,
        closeModal
      );
    });

    //

    return (
      <div className="devices__items">
        <div className="devices__different">
          <input
            type="checkbox"
            className="devices__checkbox"
            onChange={onChecked}
          />
          <span>Показать различия</span>
        </div>
        <ul className="devices__phone-list">{mapPhones}</ul>
      </div>
    );
  }
}

export default Phones;
