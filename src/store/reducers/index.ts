const initialState = {
  token: "",
};

const userReducer = (state = initialState, action: void | any) => {
  switch (action.type) {
    case "token":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
