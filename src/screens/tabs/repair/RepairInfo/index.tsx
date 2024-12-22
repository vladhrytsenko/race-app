import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles.ts';
import ToolsIcon from '../../../../assets/icons/tools.svg';
import backgroundSource from '../../../../assets/images/repair_info_bg.png';

interface IRepairInfo {
  navigation: any;
  route: any;
}

const RepairInfo = ({navigation, route}: IRepairInfo) => {
  const {code, username, reason, brand, urgency, date, time} = route.params;

  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Successfully Booked</Text>
        <ToolsIcon />
      </View>
      <ImageBackground
        source={backgroundSource}
        imageStyle={styles.contentImageContainer}
        style={styles.contentContainer}>
        <Text style={styles.subtitle}>Info</Text>

        <Text style={styles.label}>Your code:</Text>
        <Text style={styles.value}>{code}</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{username}</Text>

        <Text style={styles.label}>Reason for Breakdown:</Text>
        <Text style={styles.value}>{reason}</Text>

        <Text style={styles.label}>Urgency of Repair:</Text>
        <Text style={styles.value}>{urgency}</Text>

        <Text style={styles.label}>Car Brand:</Text>
        <Text style={styles.value}>{brand}</Text>

        <Text style={styles.label}>Repair Appointment Date:</Text>
        <Text style={styles.value}>{date}</Text>

        <Text style={styles.label}>Repair Appointment Time:</Text>
        <Text style={styles.value}>{time}</Text>

        <Pressable
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default RepairInfo;
