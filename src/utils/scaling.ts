import {PixelRatio} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export const normalizeModerately = (size: number, factor = 0.5) => {
  return PixelRatio.roundToNearestPixel(moderateScale(size, factor));
};

export const normalizeWidth = (size: number) => {
  return PixelRatio.roundToNearestPixel(scale(size));
};

export const normalizeHeight = (size: number) => {
  return PixelRatio.roundToNearestPixel(verticalScale(size));
};
