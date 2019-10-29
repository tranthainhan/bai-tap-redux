import * as types from "../Contants/ChosenItem";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      if (state.findIndex(item => item.type === action.item.type) !== -1) {
        state = state.map(item =>
          item.type === action.item.type ? action.item : item
        );
      } else {
        state = [...state, action.item];
      }
      return state;
    }
    case types.DEL_ITEM: {
      state = state.filter(item => item !== action.item);
      return state;
    }
    default:
      return state;
  }
};
export default reducer;
