import * as React from "react";
import { ROUTES } from "./routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../screens/List/List";
import Item from "../screens/Item/Item";
import { createStackNavigator } from "@react-navigation/stack";
import { TabBar } from "../components/tabBar/TabBar";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const ListStack = () => {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={ROUTES.LIST}>
      <Stack.Screen name={ROUTES.LIST} component={List} />
    </Stack.Navigator>
  );
};
const ItemStack = () => {
  return (
    <Stack.Navigator mode={'modal'} headerMode={"none"} initialRouteName={ROUTES.ITEM}>
      <Stack.Screen name={ROUTES.ITEM} component={Item} />
    </Stack.Navigator>
  );
};
function BottomTab() {
  return (
    <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}} initialRouteName={ROUTES.LIST}
                   tabBar={(props)=><TabBar {...props}/>}>
      <Tab.Screen name={ROUTES.LIST} component={ListStack} />
      <Tab.Screen name={ROUTES.ITEM} component={ItemStack} />
    </Tab.Navigator>
  );
}

export const Root = () => {
  return (
    <RootStack.Navigator headerMode={"none"}>
        <RootStack.Screen name={'DrawerNavigate'} component={BottomTab}/>
    </RootStack.Navigator>
  );
};
