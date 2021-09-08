import * as React from "react";
import Box from "../../components/_shared/Box";
import Text from "../../components/_shared/Text";

const Item = () => {
  return (
    <Box
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text>Item</Text>
    </Box>
  );
};

export default Item;
