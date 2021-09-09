import * as React from "react";
import {Image, TouchableOpacity} from "react-native";
import Box from "../../components/_shared/Box";
import { Text } from "../_shared/Text";
import {ItemsListBox} from "../_shared/ItemListBox";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "../../navigation/routes";
import {useDispatch} from "react-redux";
import {setCurrentUserAC} from "../../store/actions/app-actions";

interface Props {
  item: any;
  stopInterval: () => void;
}
export const UsersItemList: React.FC<Props> = ({item, stopInterval}) => {
  const {login,avatar_url} = item
  const {navigate} = useNavigation()
  const dispatch = useDispatch()
  const handleClientScreen = () => {
    stopInterval()
    dispatch(setCurrentUserAC(item))
    navigate(ROUTES.ITEM)
  }
  return (
      <TouchableOpacity
        onPress={handleClientScreen}
        activeOpacity={0.6}
      >
        <ItemsListBox>
          <Box width={'90%'} flexDirection={"row"} alignItems={'center'}>
            <Image source={{uri: avatar_url}} style={{width: 40, height: 40, marginRight: 20}}/>
            <Text variant='cardTitle' paddingBottom='m'>{login}</Text>
          </Box>
        </ItemsListBox>
      </TouchableOpacity>
  );
};
