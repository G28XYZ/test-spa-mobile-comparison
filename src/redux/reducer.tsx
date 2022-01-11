const initialState = { currentCount: 3 };

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ON_CHANGE_COUNT":
      console.log(action, state);
      return { currentCount: action.currentCount };
    default:
      return state;
  }
};

export default reducer;
