import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import theme from '../../styles/theme';

interface EyeSVGProps {
  style?: StyleProp<ViewStyle>;
}
function EyeCrossSVG(props: EyeSVGProps) {
  return (
    <Svg style={props.style} viewBox="0 0 489 489" fill="none">
      <Path
        d="M244.425 98.725C151.025 98.725 66.325 149.825 3.825 232.825C-1.275 239.625 -1.275 249.125 3.825 255.925C66.325 339.025 151.025 390.125 244.425 390.125C337.825 390.125 422.525 339.025 485.025 256.025C490.125 249.225 490.125 239.725 485.025 232.925C422.525 149.825 337.825 98.725 244.425 98.725ZM251.125 347.025C189.125 350.925 137.925 299.825 141.825 237.725C145.025 186.525 186.525 145.025 237.725 141.825C299.725 137.925 350.925 189.025 347.025 251.125C343.725 302.225 302.225 343.725 251.125 347.025ZM248.025 299.625C214.625 301.725 187.025 274.225 189.225 240.825C190.925 213.225 213.325 190.925 240.925 189.125C274.325 187.025 301.925 214.525 299.725 247.925C297.925 275.625 275.525 297.925 248.025 299.625Z"
        fill={theme.colors.light_accent}
      />
      <Path
        d="M80 386.5L367 99.5"
        stroke={theme.colors.extra_dark}
        strokeWidth={40}
        strokeLinecap="round"
      />
      <Path
        d="M87 390L374 103"
        stroke={theme.colors.light_accent}
        strokeWidth={40}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default EyeCrossSVG;
