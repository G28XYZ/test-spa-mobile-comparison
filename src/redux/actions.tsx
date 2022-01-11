const setCountItem = (num: number) => ({
  type: "ON_CHANGE_COUNT",
  currentCount: num,
});

const openModal = () => ({
  type: "OPEN_MODAL",
});

export { setCountItem, openModal };
