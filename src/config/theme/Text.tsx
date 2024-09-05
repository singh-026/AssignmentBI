import {createBox, createText} from '@shopify/restyle';
import {Animated} from 'react-native';
import {Theme} from '.';

const Text = createText<Theme>();
Text.defaultProps = {allowFontScaling: false};
export const AnimatedText = Animated.createAnimatedComponent(Text);

export default Text;