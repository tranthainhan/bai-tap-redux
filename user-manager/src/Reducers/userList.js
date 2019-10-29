import * as types from "../Contants/userList";
import randomid from "randomid";

const dataLocal = JSON.parse(localStorage.getItem("users"));

let initialState = dataLocal || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER: {
      action.user.id = randomid(5);
      state = [...state, action.user];
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    }
    case types.DEL_USER: {
      state = state.filter(user => user.id !== action.id);
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    }
    case types.UPDATE_USER: {
      // const newState = [...state];
      // const indexOfUSerUpdate = newState.findIndex(
      //   user => user.id === action.user.id
      // );
      // newState[indexOfUSerUpdate] = action.user;
      // localStorage.setItem("users", JSON.stringify(newState));
      // return newState;
      state = state.map(user =>
        user.id === action.user.id ? action.user : user
      );
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    }
    case types.SEARCH: {
      state = initialState;
      state = state.filter(user =>
        user.name.toUpperCase().indexOf(action.key.toUpperCase()) !== -1
      );
      return state;
    }
    default:
      return state;
  }
};
export default reducer;
