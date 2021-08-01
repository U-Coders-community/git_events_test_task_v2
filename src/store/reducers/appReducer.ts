import { appAction, appActionTypes, appState } from "../action-types";

const initialState: appState = {
  appData: [],
  loading: false,
  error: null,
  currentPage: 'Home'
}
export const appReducer = (state = initialState, action: appAction): appState => {
  switch (action.type) {
    case appActionTypes.GET_DATA:
      return { ...state, loading: true}
    case appActionTypes.GET_DATA_SUCCESS:
      return { ...state, appData: action.data }
    case appActionTypes.GET_DATA_ERROR:
      return { ...state, error: action.data }
    default:
      return state
  }
}
