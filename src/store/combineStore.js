import { combineReducers } from "redux";
import dataReducer from "../reducers/dataReducer";
import { cartReducer } from "../reducers/cartReducer";

const combineStore = combineReducers({
  userReducer: dataReducer,
  cartReducer,
});

export default combineStore;
