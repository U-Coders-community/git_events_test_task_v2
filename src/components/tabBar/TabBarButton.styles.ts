import { StyleSheet } from 'react-native';
import {theme} from "../../../assets/theme";
export const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: theme.colors.black,
  },
  textActive: {
    color: theme.colors.white,
  },
});
