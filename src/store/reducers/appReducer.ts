import {appAction, appActionTypes, appState} from "../action-types";
import {User} from "../../constants/defaultData";

const initialState: appState = {
  appData: [],
  loading: false,
  error: null,
  currentPage: 'List',
  currentUser: User,
  regularLoad: true
}


export const appReducer = (state = initialState, action: appAction): appState => {
  switch (action.type) {
    case appActionTypes.GET_DATA:
      return { ...state, appData: action.data}
    case appActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.data}
    case appActionTypes.SET_REGULAR_LOAD:
      return { ...state, regularLoad: !state.regularLoad}
    default:
      return state
  }
}
