import * as React from "react";

const ModalSearch = ({
  props: [filterText, phoneHidden, onFilterPhone],
}: any) => {
  return (
    <input
      type="text"
      value={filterText}
      className={
        phoneHidden.length > 3 || filterText
          ? "modal__search modal__search_active"
          : "modal__search"
      }
      placeholder="Поиск"
      onChange={(evt: any) => onFilterPhone(evt.target.value)}
    />
  );
};

export default ModalSearch;
