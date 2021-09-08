import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './TabBarButton.styles';
import {theme} from "../../../assets/theme";
import Box from "../_shared/Box";
import {Svg, SVG_ITEMS} from "../_shared/Svg";
import Text from "../_shared/Text";
import { ROUTES } from "../../navigation/routes";

interface Props {
  title: string;
  isActive: boolean;
  params: any;
  index: number
}

export const TabBarButton: React.FC<Props> = (props) => {
  const {navigate} = useNavigation();
  const {title, isActive, index} = props;
  const textStyles = [styles.text, isActive && styles.textActive];
  const iconColor = isActive ? theme.colors.white : theme.colors.black;
  const handlePress = () => {
    navigate(title);
  };
  const getTabBarIconByRoute = (title: string) => {
    switch (title) {
      case ROUTES.LIST:
        return SVG_ITEMS.MOCK;
      case ROUTES.ITEM:
        return SVG_ITEMS.MOCK;
    }
  }
  return (
    <TouchableOpacity onPressIn={handlePress} activeOpacity={1}>
      <Box
        flex={1}
        alignItems={'center'}
        justifyContent={'center'}
        marginBottom={'l'}
      >
        <Box>
          <Svg item={getTabBarIconByRoute(title)} size={25} color={iconColor}/>
        </Box>
        <Text style={textStyles}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};
