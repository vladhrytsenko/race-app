import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles.ts';
import Loader from '../../../../components/Loader';
import BackIcon from '../../../../assets/icons/back_button.svg';
import CarIcon from '../../../../assets/icons/car.svg';

interface IScanningResult {
  navigation: any;
}

const ScanQRCode = ({navigation}: IScanningResult) => {
  const {top} = useSafeAreaInsets();

  const [loading, setLoading] = useState<boolean>(false);

  const onCancel = () => {
    setLoading(true);

    const delay = Math.floor(Math.random() * 299 + 400);

    setTimeout(() => {
      setLoading(false);

      navigation.goBack();
    }, delay);
  };

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      {loading && <Loader />}

      <View style={styles.headerContainer}>
        <Pressable
          style={({pressed}) => [pressed && styles.onPress]}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <Text style={styles.title}>Successfully!</Text>
        <View style={styles.emptyHeaderItem} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.description}>Please wait</Text>
            <Text style={styles.description}>
              This will take up to 10 minutes
            </Text>
          </View>
          <CarIcon />
        </View>

        <Text style={styles.note}>
          Assistance is already on the way! Our team has been notified and is
          heading to your location. Please remain where you are, and wait for
          further updates. We aim to resolve the issue as quickly as possible,
          and a member of our support team will reach you shortly to assist you.
          Thank you for your patience!
        </Text>

        <Pressable style={styles.buttonContainer} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScanQRCode;
