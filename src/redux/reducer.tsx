import { dataDevices } from "../utils/dataDevices";

let mapShowPhones = dataDevices.slice(0, 3);
let mapHiddenPhones = dataDevices.filter((item: any) => !(item.id in mapShowPhones));

const initialState = {
  currentCount: 3,
  phoneShow: mapShowPhones,
  phoneHidden: mapHiddenPhones,
  modal: false,
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
      return { ...state, modal: !state.modal };

    default:
      return state;
  }
};

export default reducer;
