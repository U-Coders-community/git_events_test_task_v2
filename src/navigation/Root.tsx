import * as React from "react";
import { ROUTES } from "./routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import ScreenOne from "../screens/ScreenOne/ScreenOne";
import ScreenThree from "../screens/ScreenThree/ScreenThree";
import ScreenTwo from "../screens/ScreenTwo/ScreenTwo";
import { createStackNavigator } from "@react-navigation/stack";
import { TabBar } from "../components/tabBar/TabBar";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
};
const ScreenOneStack = () => {
  return (
    <Stack.Navigator mode={'modal'} headerMode={"none"} initialRouteName={ROUTES.SCREEN_ONE}>
      <Stack.Screen name={ROUTES.SCREEN_ONE} component={ScreenOne} />
    </Stack.Navigator>
  );
};
const ScreenTwoStack = () => {
  return (
    <Stack.Navigator mode={'modal'} headerMode={"none"} initialRouteName={ROUTES.SCREEN_TWO}>
      <Stack.Screen name={ROUTES.SCREEN_TWO} component={ScreenTwo} />
    </Stack.Navigator>
  );
};
const ScreenThreeStack = () => {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={ROUTES.SCREEN_THREE}>
      <Stack.Screen name={ROUTES.SCREEN_THREE} component={ScreenThree} />
    </Stack.Navigator>
  );
};
function BottomTab() {
  return (
    <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}} initialRouteName={ROUTES.HOME}
                   tabBar={(props)=><TabBar {...props}/>}>
      <Tab.Screen name={ROUTES.HOME} component={HomeStack} />
      <Tab.Screen name={ROUTES.SCREEN_ONE} component={ScreenOneStack} />
      <Tab.Screen name={ROUTES.SCREEN_TWO} component={ScreenTwoStack} />
      <Tab.Screen name={ROUTES.SCREEN_THREE} component={ScreenThreeStack} />
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
