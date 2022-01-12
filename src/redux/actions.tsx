const setCountItem = (num: number) => ({
  type: "ON_CHANGE_COUNT",
  currentCount: num,
});

const openModal = (id: number) => ({
  type: "OPEN_MODAL",
  id,
});

const switchPhone = (id: number) => ({
  type: "SWITCH_PHONE",
  id,
});

const setPosition = (position: number) => ({
  type: "SET_POSITION_MODAL",
  position,
});

const onFilterPhone = (text: string) => ({
  type: "ON_FILTER",
  filterText: text,
});

export { setCountItem, openModal, switchPhone, setPosition, onFilterPhone };
