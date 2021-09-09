import {useDispatch} from 'react-redux';
import {API_BASE_URL, API_ENDPOINTS} from '../constants/api';
import {Http} from '../services/http';
import {getListDataAC} from "../store/actions/app-actions";

const useList = () => {
  const dispatch = useDispatch();
  const loadDataList = async (url = `${API_BASE_URL}${API_ENDPOINTS.GET_LIST}?per_page=25`) => {
    try {
      const res = await Http.get(url);
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
