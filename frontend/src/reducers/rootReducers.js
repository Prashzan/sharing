import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./userReducers";

const rootReducer = combineReducers({
  userReducer: userLoginReducer,
  registerReducer: userRegisterReducer,
});
export default rootReducer;
