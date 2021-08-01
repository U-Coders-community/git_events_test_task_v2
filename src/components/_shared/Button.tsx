import React from "react";
import { TouchableOpacity} from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps
} from "@shopify/restyle";

import Text from "./Text";
import { Theme } from "../../../assets/theme";
import Box from "./Box";

const restyleFunctions = [spacing, border, backgroundColor];

type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
  onPress?: () => void;
  onPressIn?: () => void;
  label: string;
};

const Button = ({ onPress, label, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <Box {...props}
           backgroundColor={"main"}
        // @ts-ignore
           borderRadius={"m"}
           justifyContent={"center"}
           height={56}
      >
        <Text>{label}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
