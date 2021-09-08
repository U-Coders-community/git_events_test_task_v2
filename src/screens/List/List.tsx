import * as React from "react";
import Box from "../../components/_shared/Box";
import Text from "../../components/_shared/Text";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";
import useList from "../../hooks/useDataList";

const List = () => {
  const {loadDataList} = useList()
  const {appData} = useTypedSelector((state)=>state.app)
  console.log(appData.results, 'appData')
  useEffect(()=>{
    loadDataList()
    // setInterval(() => loadDataList(), 60000);
  },[])
  const renderItems = () => {
    return appData.results.map((i: any)=>{
      return (
        <Text>{i.login.username}</Text>
      )
    })
  }
  return (
     <Box
       flex={1}
       alignItems={'center'}
       justifyContent={'center'}
     >
       {appData ? renderItems() : <Text>Check Connection</Text>}
     </Box>
  );
};

export default List;
