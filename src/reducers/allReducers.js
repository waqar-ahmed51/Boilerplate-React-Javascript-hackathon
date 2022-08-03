import AppReducerStore from "./AppReducerStore";
import Count from "./Count";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    AppReducerStore: AppReducerStore,
    Count: Count
})

export default allReducers;