import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import {styles} from './styles.ts';
import loaderAnimationSource from '../../assets/animations/loader.json';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={loaderAnimationSource}
        style={styles.animation}
      />
    </View>
  );
};

export default Loader;
