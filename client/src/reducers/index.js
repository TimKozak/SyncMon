import { combineReducers } from "redux";

// // Reducers
import syncReducer from "./syncReducer";
import authReducer from "./authReducer";

// All reducers are exported from here
export default combineReducers({
  sync: syncReducer,
  auth: authReducer,
});
