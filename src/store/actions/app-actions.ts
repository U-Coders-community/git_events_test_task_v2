import { appActionTypes } from "../action-types";

export const  getDataAC = (data: [])=>{
  return{type: appActionTypes.GET_DATA, data: data}
}
