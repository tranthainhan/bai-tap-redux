import * as types from "../Contants/getUser";

let initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return action.user;
    case types.RESET_USER_SELECTED: {
      return null;
    }
    default:
      return state;
  }
};
export default reducer;
