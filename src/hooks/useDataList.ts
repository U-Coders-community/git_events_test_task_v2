import {useDispatch} from 'react-redux';
import {API_BASE_URL, API_ENDPOINTS} from '../constants/api';
import {Http} from '../services/http';
import {getListDataAC} from "../store/action-types";

const useList = () => {
  const dispatch = useDispatch();
  const loadDataList = async () => {
    try {
      const res = await Http.get(`${API_BASE_URL}${API_ENDPOINTS.GET_LIST}`);
      if (res) {
        dispatch(getListDataAC(res))
      } else console.log('no data');
    } catch (e) {
      console.log(e);
    }
  };

  return { loadDataList };
};

export default useList;
