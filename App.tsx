import * as React from "react";
import { Root } from "./src/navigation/Root";
import { store } from "./src/store";
import { theme } from "./assets/theme";
import 'react-native-gesture-handler';
import { ThemeProvider } from "@shopify/restyle";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import {SafeAreaView} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Root/>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
