import * as React from "react";
import Box from "../../components/_shared/Box";
import Text from "../../components/_shared/Text";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ItemsListBox} from "../../components/_shared/ItemListBox";
import {Image, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";
import {setRegularLoadAC} from "../../store/actions/app-actions";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "../../navigation/routes";

const Item = () => {
  const {currentUser} = useTypedSelector((state)=>state.app)
  const {navigate} = useNavigation()
  const dispatch = useDispatch()
  const startInterval = () => {
    dispatch(setRegularLoadAC())
    navigate(ROUTES.LIST)
  }
  const { id, node_id, avatar_url, login } = currentUser
  return (
    <>
    <TouchableOpacity onPressIn={startInterval}>
      <Box alignItems={'flex-end'} paddingHorizontal={'xl'} paddingVertical={'xl'}>
        <Text>Go Back</Text>
      </Box>
    </TouchableOpacity>
    <Box
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <ItemsListBox>
        <Box flexDirection={'column'} width={'100%'}>
          <Text marginVertical={'m'}>id: {id}</Text>
          <Box flexDirection={'row'}>
            <Image source={{uri: avatar_url}} style={{width: 40, height: 40, marginRight: 20}}/>
            <Text marginVertical={'m'}>login: {login}</Text>
          </Box>
          <Text marginVertical={'m'}>node_id: {node_id}</Text>
        </Box>
      </ItemsListBox>
    </Box></>
  );
};

export default Item;
