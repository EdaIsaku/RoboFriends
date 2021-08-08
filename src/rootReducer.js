import { combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducers";

const rootReducer = combineReducers({ searchRobots, requestRobots });

export default rootReducer;
