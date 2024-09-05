import {createTheme} from '@shopify/restyle';
import {normalizeModerately} from '../../utils/scaling';

const palette = {
  white: '#ffffff',
  black: '#000000',
};
const colors = {
  mainBackground: palette.white,
  light: palette.white,
};

const spacing = {
  zero: 0,
  xxs: 2,
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  xxxxl: 54,
  xxxxxl: 60,
};

export type Spacing = keyof typeof spacing;
export type Colors = keyof typeof colors;
export type Palette = keyof typeof palette;
export type FontFamily = 'HelveticaNeueLTPro-LtIt' | 'HelveticaNeueLTPro-Bd';
// can add as many for the types

const textVariants = {
  tag1: {
    fontFamily: 'HelveticaNeueLTPro-Md',
    fontSize: normalizeModerately(10),
    letterSpacing: 2,
    lineHeight: normalizeModerately(12),
    textTransform: 'uppercase',
  },
  tag2: {
    fontFamily: 'HelveticaNeueLTPro-Md',
    fontSize: normalizeModerately(12),
    letterSpacing: 4,
    lineHeight: normalizeModerately(14),
    textTransform: 'uppercase',
  },
  tag3: {
    fontFamily: 'HelveticaNeueLTPro-Md',
    fontSize: normalizeModerately(12),
    letterSpacing: 4,
    lineHeight: normalizeModerately(14),
    textTransform: 'uppercase',
  },
};
const theme = createTheme({
  colors: colors,
  spacing: spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: textVariants,
});
export type Theme = typeof theme;
export default theme;
