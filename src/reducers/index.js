import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import ErrorReducer from "./errorReducer";
import PatientReducer from "./patientReducer";
import ChatReducer from "./chatReducer";

export default combineReducers({
  auth: AuthReducer,
  patient: PatientReducer,
  chat: ChatReducer,
  errors: ErrorReducer
});
