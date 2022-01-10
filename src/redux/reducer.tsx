const initialState = { count: 3 };

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ON_CHANGE_COUNT":
      console.log(action, state);
      return { count: action.count };
    default:
      return state;
  }
};

export default reducer;
