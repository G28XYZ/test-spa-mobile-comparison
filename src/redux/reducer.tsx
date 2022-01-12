import { dataDevices } from "../utils/dataDevices";

const initialPhoneShow = dataDevices.slice(0, 3);
const initialPhoneHidden = dataDevices.filter((item: any) => !initialPhoneShow.includes(item));

const initialState = {
  maxDevices: dataDevices.length,
  currentCount: 3,
  phoneShow: initialPhoneShow,
  phoneHidden: initialPhoneHidden,
  modal: false,
  onOpenId: 0,
  positionModal: 0,
  filterText: "",
  onChecked: false,
};

function mappingPhones(state: any, currentCount: number) {
  const allDevices = [
    ...state.phoneShow,
    ...dataDevices.filter((item) => !state.phoneShow.includes(item)),
  ];
  const mapShowPhones = allDevices.slice(0, currentCount);
  const mapHiddenPhones = allDevices.slice(mapShowPhones.length);
  return [mapShowPhones, mapHiddenPhones];
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    //
    case "ON_CHANGE_COUNT":
      const [mapShowPhones, mapHiddenPhones] = mappingPhones(state, action.currentCount);
      return {
        ...state,
        currentCount: action.currentCount,
        phoneShow: mapShowPhones,
        phoneHidden: mapHiddenPhones,
      };

    case "OPEN_MODAL":
      return { ...state, modal: !state.modal, onOpenId: action.id };

    case "SET_POSITION_MODAL":
      return { ...state, positionModal: action.position };

    case "ON_CHECKED":
      return { ...state, onChecked: !state.onChecked };

    case "ON_FILTER":
      const filterText = action.filterText.toLowerCase();
      const phoneHidden = dataDevices.filter((item) => !state.phoneShow.includes(item));
      const filterPhone = dataDevices.filter(
        (item: any) => phoneHidden.includes(item) && item.name.toLowerCase().includes(filterText)
      );
      return { ...state, phoneHidden: filterPhone, filterText };

    case "SWITCH_PHONE":
      const findIndexInShow: number = state.phoneShow.findIndex(
        (item: any) => state.onOpenId == item.id
      );
      const findIndexInHidden: number = state.phoneHidden.findIndex(
        (item: any) => action.id == item.id
      );
      const inShowObj = state.phoneShow[findIndexInShow];
      const inHiddenObj = state.phoneHidden[findIndexInHidden];
      const [showPhones, hiddenPhones] = mappingPhones(state, state.currentCount);
      showPhones[findIndexInShow] = inHiddenObj;
      hiddenPhones[findIndexInHidden] = inShowObj;
      return {
        ...state,
        phoneShow: showPhones,
        phoneHidden: hiddenPhones,
        modal: !state.modal,
        onOpenId: action.id,
        filterText: "",
      };

    default:
      return state;
  }
};

export default reducer;
