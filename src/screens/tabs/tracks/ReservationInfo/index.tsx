import React from 'react';
import {NativeScrollEvent, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabbedHeaderPager} from 'react-native-sticky-parallax-header';
import {useSharedValue} from 'react-native-reanimated';

import {styles} from './styles.ts';

interface IReservationInfo {
  navigation: any;
  route: any;
}

const ReservationInfo = ({navigation, route}: IReservationInfo) => {
  const {
    imageSrc,
    title,
    username,
    date,
    time,
    code,
    description,
    complexity,
    distance,
  } = route.params;

  const {top} = useSafeAreaInsets();
  const scrollValue = useSharedValue(0);

  const onScroll = (e: NativeScrollEvent) => {
    'worklet';

    scrollValue.value = e.contentOffset.y;
  };

  return (
    <TabbedHeaderPager
      containerStyle={styles.screenContainer}
      backgroundImage={imageSrc}
      title={title}
      titleStyle={styles.titleStyle}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.bookingInfoTitle}>Booking info</Text>
        <View style={styles.bookingInfoWrapper}>
          <View style={styles.bookingInfoContainer}>
            <Text style={styles.bookingInfoText}>Name:</Text>
            <Text style={styles.bookingInfoText}>Date:</Text>
            <Text style={styles.bookingInfoText}>Time:</Text>
            <Text style={styles.bookingInfoText}>Booking code:</Text>
          </View>
          <View style={styles.bookingInfoContainer}>
            <Text style={styles.bookingInfoText}>{username}</Text>
            <Text style={styles.bookingInfoText}>{date}</Text>
            <Text style={styles.bookingInfoText}>{time}</Text>
            <Text style={styles.bookingInfoText}>{code}</Text>
          </View>
        </View>
        <View style={styles.contentHeaderContainer}>
          <Text style={styles.contentTitle}>
            {title} <Text style={styles.contentComplexity}>{complexity}</Text>
          </Text>
          <Text style={styles.contentText}>{distance}km</Text>
        </View>

        <Text style={styles.contentText}>{description}</Text>

        <Pressable
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    </TabbedHeaderPager>
  );
};

export default ReservationInfo;
