import React from 'react';
import {SvgCss} from "react-native-svg";
import mock from '../../../assets/icons/mock';

interface Props {
  item: string | undefined;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

export const SVG_ITEMS = {
  MOCK: mock
};

export const Svg: React.FC<Props> = (props) => {
  const {
    item,
    width,
    height,
    size,
    color
  } = props;
  const svgWidth = width ? width : size;
  const svgHeight = height ? height : size;
  return (
    // @ts-ignore
    <SvgCss xml={item} width={svgWidth} height={svgHeight} color={color} />
  );
};
