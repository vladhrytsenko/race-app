import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color: string;
}

const TracksIcon = ({color}: Props) => {
  return (
    <Svg width="40" height="37" viewBox="0 0 40 37" fill="none">
      <Path
        d="M39.6098 24.1731L34.6671 19.2739C34.42 19.0277 34.1261 18.8326 33.8024 18.6998C33.4787 18.5669 33.1316 18.499 32.7812 18.5H21.3334V15.8571H33.3337C34.041 15.8571 34.7193 15.5787 35.2194 15.0831C35.7195 14.5874 36.0005 13.9152 36.0005 13.2143V5.28571C36.0005 4.58478 35.7195 3.91256 35.2194 3.41693C34.7193 2.9213 34.041 2.64286 33.3337 2.64286H21.3334V1.32143C21.3334 0.970964 21.1929 0.634853 20.9428 0.387037C20.6928 0.139221 20.3536 0 20 0C19.6464 0 19.3072 0.139221 19.0572 0.387037C18.8071 0.634853 18.6666 0.970964 18.6666 1.32143V2.64286H7.21877C6.86841 2.6419 6.52134 2.7098 6.19763 2.84263C5.87392 2.97546 5.58 3.17059 5.33288 3.41672L0.390227 8.31592C0.14036 8.56371 0 8.89969 0 9.25C0 9.60031 0.14036 9.93629 0.390227 10.1841L5.33288 15.0833C5.58 15.3294 5.87392 15.5245 6.19763 15.6574C6.52134 15.7902 6.86841 15.8581 7.21877 15.8571H18.6666V18.5H6.66625C5.95899 18.5 5.28069 18.7784 4.78058 19.2741C4.28047 19.7697 3.99951 20.4419 3.99951 21.1429V29.0714C3.99951 29.7724 4.28047 30.4446 4.78058 30.9402C5.28069 31.4358 5.95899 31.7143 6.66625 31.7143H18.6666V35.6786C18.6666 36.029 18.8071 36.3651 19.0572 36.613C19.3072 36.8608 19.6464 37 20 37C20.3536 37 20.6928 36.8608 20.9428 36.613C21.1929 36.3651 21.3334 36.029 21.3334 35.6786V31.7143H32.7812C33.1316 31.7152 33.4787 31.6473 33.8024 31.5145C34.1261 31.3817 34.42 31.1866 34.6671 30.9404L39.6098 26.0412C39.8596 25.7934 40 25.4575 40 25.1071C40 24.7568 39.8596 24.4208 39.6098 24.1731Z"
        fill={color}
      />
    </Svg>
  );
};

export default TracksIcon;
