import * as React from 'react';
import { TextInput as Input } from 'react-native';
import Box from "./Box";
import {theme} from "../../../assets/theme";

interface Props {
  value: string | undefined;
  name: string;
  placeholder: string;
  border?: boolean;
  onChange(value: string, name?: string): void;
}
export const TextInput: React.FC<Props> = ({ value, name, placeholder, onChange, border }) => {
  const borderBottom = border ? 0 : 0.8
  const handleChange = (newValue: string) => {
    onChange(newValue, name);
  };
  return (
    <Box style={{
      width: '100%',
      paddingVertical: 15,
      paddingHorizontal: 6,
      borderBottomWidth: borderBottom,
      borderColor: theme.colors.gray,
    }}>
      <Input
        style={{ color: 'black' }}
        placeholderTextColor={'gray'}
        placeholder={placeholder}
        value={value}
        autoCapitalize={"none"}
        onChangeText={handleChange}
      />
    </Box>
  );
};
