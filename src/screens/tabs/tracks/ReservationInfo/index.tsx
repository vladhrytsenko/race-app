import React from 'react';
import {ScrollView, Pressable, Text, View, Image} from 'react-native';

import {styles} from './styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IReservationInfo {
  navigation: any;
  route: any;
}

const ReservationInfo = ({navigation, route}: IReservationInfo) => {
  const {top} = useSafeAreaInsets();

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

  return (
    <ScrollView
      style={[styles.screenContainer, {paddingTop: top + 16}]}
      showsVerticalScrollIndicator={false}>
      <Image source={imageSrc} style={styles.backgroundImage} />
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
    </ScrollView>
  );
};

export default ReservationInfo;
