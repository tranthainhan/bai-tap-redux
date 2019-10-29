import { combineReducers } from "redux";
import toggleModal from "./toggleModal";
import users from "./userList";
import userSelected from "./getUser";

const rootReducer = combineReducers({
  toggleModal,
  users,
  userSelected
});
export default rootReducer;
