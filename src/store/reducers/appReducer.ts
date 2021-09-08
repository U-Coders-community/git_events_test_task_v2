import { appAction, appActionTypes, appState } from "../action-types";

const initialState: appState = {
  appData: [],
  loading: false,
  error: null,
  currentPage: 'List'
}
export const appReducer = (state = initialState, action: appAction): appState => {
  switch (action.type) {
    case appActionTypes.GET_DATA:
      return { ...state, appData: action.data}
    default:
      return state
  }
}
