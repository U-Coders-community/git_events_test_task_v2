import { createTheme, BaseTheme } from '@shopify/restyle'

const palette = {
  primary: '#FF9900',
  secondary: '#0C0D34',
  danger: '#FF0058',

  purpleLight: '#8C6FF7',
  bluePrimary: '#0C0D34',
  purpleDark: '#3F22AB',
  green: '#2CB9B0',

  black: '#15171A',
  white: '#FFFFFF',
  greyLight: '#E4E8EF',
  tabBarBG: '#F7F7F7',
  gray: '#808A99',
  darkGray: '#808A9E',
  grayMedium: '#BFC7D5',
};


export const theme: BaseTheme = createTheme({
    colors: {
      ...palette
    },
  spacing: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    headerTitle: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold',
      textAlign: 'left',
      fontFamily:'Arial',
      color: 'black',
    },
    h1: {
      fontSize: 32,
      lineHeight: 40,
      textAlign: 'center',
      fontFamily:'Arial',
      color: 'black',
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      textAlign: 'center',
      fontFamily:'Arial',
      color: 'black',
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      fontFamily:'Arial',
      color: 'mainWhite',
    },
    subScreenHeader: {
      fontSize: 18,
      lineHeight: 24,
      textAlign: 'center',
      fontFamily:'Arial',
      fontWeight: 'bold',
      color: 'black',
    },
    cardTitle: {
      fontSize: 16,
      textAlign: 'left',
      fontFamily:'Arial',
      color: 'black',
    },
    cardSubTitle: {
      fontSize: 14,
      textAlign: 'left',
      fontFamily:'Arial',
      color: 'gray',
    },
    anyDescription: {
      fontSize: 13,
      textAlign: 'left',
      color: 'darkGray',
    }
  }
});

export type Theme = typeof theme;
