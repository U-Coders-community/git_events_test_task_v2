import * as React from "react";
import Box from "../../components/_shared/Box";
import {useEffect} from "react";
import useList from "../../hooks/useDataList";
import {UsersList} from "../../components/listWrapper/ListWrapper";

const List = () => {
  const {loadDataList} = useList();
  useEffect(()=>{
    loadDataList()
  },[])

  return (
       <Box
         flex={1}
         alignItems={'center'}
         justifyContent={'center'}
       >
          <UsersList />
       </Box>
  );
};

export default List;
