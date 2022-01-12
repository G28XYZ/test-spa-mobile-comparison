import { dataDevices } from "../utils/dataDevices";

let mapShowPhones = dataDevices.slice(0, 3);
let mapHiddenPhones = dataDevices.filter(
  (item: any) => !(item.id in mapShowPhones)
);

const initialState = {
  maxDevices: dataDevices.length,
  currentCount: 3,
  phoneShow: mapShowPhones,
  phoneHidden: mapHiddenPhones,
  modal: false,
  onOpenId: 0,
  positionModal: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    //
    case "ON_CHANGE_COUNT":
      const allDevices = [...state.phoneShow, ...state.phoneHidden];
      mapShowPhones = allDevices.slice(0, action.currentCount);
      mapHiddenPhones = allDevices.slice(mapShowPhones.length);
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

    case "SWITCH_PHONE":
      const findIndexInShow: number = state.phoneShow.findIndex(
        (item: any) => state.onOpenId == item.id
      );
      const findIndexInHidden: number = state.phoneHidden.findIndex(
        (item: any) => action.id == item.id
      );
      const inShowObj = state.phoneShow[findIndexInShow];
      const inHiddenObj = state.phoneHidden[findIndexInHidden];

      mapShowPhones[findIndexInShow] = inHiddenObj;
      mapHiddenPhones[findIndexInHidden] = inShowObj;
      return {
        ...state,
        phoneShow: mapShowPhones,
        phoneHidden: mapHiddenPhones,
        modal: !state.modal,
        onOpenId: action.id,
      };

    default:
      return state;
  }
};

export default reducer;
