import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from "./reducers/appReducer";


export const reducer = combineReducers({
  app: appReducer,
})

export type RootState = ReturnType<typeof reducer>
export const store = createStore(reducer, composeWithDevTools())
