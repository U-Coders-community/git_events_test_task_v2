// TODO
import {appActionTypes} from "../action-types";

export const getListDataAC = (data: any) => {
  return {
    type: appActionTypes.GET_DATA,
    data,
  };
}

// TODO

export const setCurrentUserAC = (data: any) => {
  return {
    type: appActionTypes.SET_CURRENT_USER,
    data,
  };
}
export const setRegularLoadAC = () => {
  return {
    type: appActionTypes.SET_REGULAR_LOAD
  };
}
