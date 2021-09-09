import * as React from "react";
import { ROUTES } from "./routes";
import List from "../screens/List/List";
import Item from "../screens/Item/Item";
import { createStackNavigator } from "@react-navigation/stack";

const App = createStackNavigator();

export const Root = () => {
  return (
    <App.Navigator  screenOptions={{headerShown: false}}>
        <App.Screen options={{gestureEnabled: false}} name={ROUTES.LIST} component={List}/>
        <App.Screen options={{gestureEnabled: false}} name={ROUTES.ITEM} component={Item}/>
    </App.Navigator>
  );
};
