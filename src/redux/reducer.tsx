import { dataDevices } from "../utils/dataDevices";

let mapShowPhones = dataDevices.slice(0, 3);
let mapHiddenPhones = dataDevices.filter((item: any) => !(item.id in mapShowPhones));

const initialState = {
  currentCount: 3,
  phoneShow: mapShowPhones,
  phoneHidden: mapHiddenPhones,
  modal: false,
  onOpenId: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    //
    case "ON_CHANGE_COUNT":
      mapShowPhones = dataDevices.slice(0, action.currentCount);
      mapHiddenPhones = dataDevices.filter((item: any) => !(item.id in mapShowPhones));
      return {
        ...state,
        currentCount: action.currentCount,
        phoneShow: mapShowPhones,
        phoneHidden: mapHiddenPhones,
      };

    case "OPEN_MODAL":
      return { ...state, modal: !state.modal, onOpenId: action.id };

    case "SWITCH_PHONE":
      const findIndexInShow: number = state.phoneShow.findIndex(
        (item: any) => state.onOpenId == item.id
      );
      const findIndexInHidden: number = state.phoneHidden.findIndex(
        (item: any) => action.id == item.id
      );
      const inShowObj = mapShowPhones[findIndexInShow];
      const inHiddenObj = mapHiddenPhones[findIndexInHidden];

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
