import React from 'react';
import Box from "../_shared/Box";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {TabBarButton} from "./TabBarButton";

export const TabBar: React.FC<BottomTabBarProps> = ({state}) => {
  const renderButtons = () => {
    return state.routes.map((route: any, index: number) => {
      const {name, params} = route;
      const isFocused = state.index === index
      return (
        <TabBarButton
          key={index}
          index={index}
          title={name}
          isActive={isFocused}
          params={params}
        />
      )
    })
  }
  return (
    <Box
      style={{height: 75}}
      borderTopWidth={1}
      paddingVertical={'l'}
      borderTopColor={'gray'}
      backgroundColor={'gray'}
      alignItems={'center'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      position={'relative'}
    >
      {renderButtons()}
    </Box>
  );
};
