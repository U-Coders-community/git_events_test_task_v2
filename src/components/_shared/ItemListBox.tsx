import * as React from "react";
import Box from "../../components/_shared/Box";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  }
})

interface Props {
  children: any;
}
export const ItemsListBox: React.FC<Props> = ({children}) => {
  return (
    <Box
      style={styles.shadow}
      width={'95%'}
      alignItems={'center'}
      flexDirection='row'
      justifyContent='center'
      marginVertical='s'
      marginHorizontal='s'
      paddingVertical='l'
      paddingHorizontal='m'
      // @ts-ignore
      borderRadius='m'>
      {children}
    </Box>
  );
};
