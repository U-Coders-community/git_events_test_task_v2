import React, { useState } from 'react';
import {FlatList} from 'react-native';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UsersItemList} from "../listItem/ListItem";
import useList from "../../hooks/useDataList";
import {UseInterval} from "../../hooks/useInterval";
import {setRegularLoadAC} from "../../store/actions/app-actions";
import {useDispatch} from "react-redux";

export const UsersList = () => {
  const {appData, regularLoad} = useTypedSelector((state)=>state.app)
  const [loading, setLoading] = useState(false)
  const [update, setUpdate] = useState(true)
  const {loadDataList} = useList();
  const dispatch = useDispatch()

  const timeoutHandler = () => {
    if(update){
      setUpdate(false)
    }
    setTimeout(()=>{setUpdate(true)}, 15000)
  }
  const stopInterval = () => {
    dispatch(setRegularLoadAC())
  }


  const updateHandler = async () => {
    timeoutHandler()
    setLoading(true)
    if(update){
      await loadDataList();
    }
    await setLoading(false);

  }

  UseInterval(async ()=>{loadDataList()}, regularLoad ? 60000 : null)

  const renderItem = ({item, index}: any) => (
    <UsersItemList item={item} key={index} stopInterval={stopInterval}/>
  );
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={appData}
      onRefresh={updateHandler}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      refreshing={loading}
    />
  )
}
