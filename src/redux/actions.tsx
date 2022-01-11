const setCountItem = (num: number) => ({
  type: "ON_CHANGE_COUNT",
  currentCount: num,
});

const openModal = (id = 0) => ({
  type: "OPEN_MODAL",
  id,
});

const switchPhone = (id: any) => ({
  type: "SWITCH_PHONE",
  id,
});

export { setCountItem, openModal, switchPhone };
