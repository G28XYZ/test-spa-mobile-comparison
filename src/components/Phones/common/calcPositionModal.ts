const calcPositionModal = (evt: any) => {
  const widthModal = 520;
  const innerWidth = evt.view.innerWidth;
  const pageX = evt.pageX;
  const correctOnPage = innerWidth > 1100 ? innerWidth / 2 - widthModal : 0;
  const correctBefore =
    widthModal + pageX < innerWidth ? 0 : widthModal + pageX - innerWidth;
  if (innerWidth <= 640) {
    return 0;
  }
  return pageX - correctBefore - correctOnPage;
};

export default calcPositionModal;
