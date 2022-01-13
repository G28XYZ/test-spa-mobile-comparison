const setCountItem = (num: number) => ({
  type: "ON_CHANGE_COUNT",
  currentCount: num,
});

const openModal = (id: number) => ({
  type: "OPEN_MODAL",
  id,
});

const closeModal = () => ({
  type: "CLOSE_MODAL",
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

const onChecked = () => ({
  type: "ON_CHECKED",
});

export {
  openModal,
  closeModal,
  setCountItem,
  switchPhone,
  setPosition,
  onFilterPhone,
  onChecked,
};
