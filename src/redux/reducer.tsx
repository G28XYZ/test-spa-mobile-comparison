import { dataDevices } from "../utils/dataDevices";

const initialState = {
  currentCount: 3,
  phoneShow: new Array(),
  modal: false,
};

const reducer = (state = initialState, action: any) => {
  let mapPhones;
  switch (action.type) {
    case "ON_CHANGE_COUNT":
      mapPhones = dataDevices.slice(0, action.currentCount).map((phone) => phone);
      return { ...state, currentCount: action.currentCount, phoneShow: mapPhones };
    case "OPEN_MODAL":
      return { ...state, modal: !state.modal };
    default:
      return state;
  }
};

export default reducer;
