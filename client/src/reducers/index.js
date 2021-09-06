import { combineReducers } from "redux";

// // Reducers
import syncReducer from "./syncReducer";

// All reducers are exported from here
export default combineReducers({
  sync: syncReducer,
});
