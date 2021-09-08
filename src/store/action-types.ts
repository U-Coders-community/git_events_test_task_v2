//APP_STATE
export interface appState {
  appData: any,
  loading: boolean;
  error: null | string;
  currentPage: string;
}
export type appAction = fetchAppAction

export enum appActionTypes {
  GET_DATA = 'GET_DATA',
}
interface fetchAppAction {
  type: appActionTypes.GET_DATA;
  data: any[];
}

export const getListDataAC = (data: any) => {
  return {
    type: appActionTypes.GET_DATA,
    data,
  };

}
