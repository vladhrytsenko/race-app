import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImageBackground, Pressable, Text, View} from 'react-native';

import {styles} from './styles.ts';
import ArrowIcon from '../../assets/icons/get_started_arrow.svg';
import backgroundSource from '../../assets/images/get_started_bg.png';

interface GetStartedProps {
  navigation: any;
}

const GetStarted = ({navigation}: GetStartedProps) => {
  const {top, bottom} = useSafeAreaInsets();

  const onStart = () => {
    navigation.navigate('TabNavigation');
  };

  return (
    <ImageBackground
      source={backgroundSource}
      style={[styles.container, {paddingTop: top, paddingBottom: bottom}]}>
      <Text style={styles.subtitle}>Club</Text>
      <Text style={styles.title}>Nascar</Text>

      <Pressable
        onPress={onStart}
        style={({pressed}) => [
          styles.buttonContainer,
          pressed && styles.onPress,
        ]}>
        <Text style={styles.buttonTitle}>Get started</Text>
        <View style={styles.buttonIconContainer}>
          <ArrowIcon />
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default GetStarted;
