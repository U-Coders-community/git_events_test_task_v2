//APP_STATE
export interface appState {
  appData: any,
  loading: boolean;
  error: null | string;
  currentPage: string;
}
export type appAction = fetchAppAction
  | fetchAppActionSuccess
  | fetchAppActionError
export enum appActionTypes {
  GET_DATA = 'GET_DATA',
  GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
  GET_DATA_ERROR = 'GET_DATA_ERROR',
}
interface fetchAppAction {
  type: appActionTypes.GET_DATA;
}
interface fetchAppActionSuccess {
  type: appActionTypes.GET_DATA_SUCCESS;
  data: any[];
}
interface fetchAppActionError {
  type: appActionTypes.GET_DATA_ERROR;
  data: string;
}
