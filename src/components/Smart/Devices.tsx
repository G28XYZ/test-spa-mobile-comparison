import * as React from "react";

class Devices extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <section className="devices">
        <div className="devices__header">
          <h1 className="devices__title">Смартфоны</h1>
        </div>
      </section>
    );
  }
}
