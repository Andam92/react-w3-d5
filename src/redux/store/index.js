import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rockReducer } from "../reducers/rockReducer";
import { popReducer } from "../reducers/popReducer";
import { hipHopReducer } from "../reducers/hipHopReducer";

const rootReducer = combineReducers({
  rock: rockReducer,
  pop: popReducer,
  hipHop: hipHopReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
