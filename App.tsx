import * as React from "react";
import { Root } from "./src/navigation/Root";
import { store } from "./src/store";
import { theme } from "./assets/theme";
import 'react-native-gesture-handler';
import { ThemeProvider } from "@shopify/restyle";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Root/>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
