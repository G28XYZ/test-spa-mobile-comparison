import { dataDevices } from "../utils/dataDevices";

let mapShowPhones = dataDevices.slice(0, 3);
let mapHiddenPhones = dataDevices.filter((item: any) => !(item.id in mapShowPhones));

const initialState = {
  currentCount: 3,
  phoneShow: mapShowPhones,
  phoneHidden: mapHiddenPhones,
  modal: false,
  onOpenId: "",
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
      console.log(action);
      return { ...state, modal: !state.modal, onOpenId: action.id };

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
      console.log(mapShowPhones, mapHiddenPhones);
      return {
        ...state,
        phoneShow: mapShowPhones,
        phoneHidden: mapHiddenPhones,
        modal: !state.modal,
      };

    default:
      return state;
  }
};

export default reducer;
