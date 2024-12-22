import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import DeviceInfo from 'react-native-device-info';

import {styles} from './styles.ts';
import Loader from '../../../../components/Loader';

interface IScanQRCode {
  navigation: any;
}

const useGetCameraDevice = DeviceInfo.isEmulatorSync()
  ? () => undefined
  : useCameraDevice;

const ScanQRCode = ({navigation}: IScanQRCode) => {
  const {top} = useSafeAreaInsets();

  const [loading, setLoading] = useState<boolean>(false);
  const [codeIsScanned, setCodeIsScanned] = useState<boolean>(false);

  const device = useGetCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  const onCodeScanned = () => {
    setLoading(true);

    const delay = Math.floor(Math.random() * 299 + 400);

    setTimeout(() => {
      setLoading(false);
      setCodeIsScanned(true);
    }, delay);
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned,
  });

  const onCancel = () => {
    setCodeIsScanned(false);
  };

  const onNext = () => {
    navigation.navigate('ScanningResult');

    setCodeIsScanned(false);
  };

  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        await requestPermission();
      }
    })();
  }, [hasPermission, requestPermission]);

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      {loading && <Loader />}

      <Text style={styles.title}>CALL FOR HELP</Text>

      <View style={styles.contentContainer}>
        <View style={styles.cameraContainer}>
          {!!device && (
            <Camera
              isActive
              style={styles.scannerContainer}
              device={device}
              codeScanner={codeScanner}
            />
          )}
        </View>
        {codeIsScanned ? (
          <View>
            <Text style={styles.subtitle}>
              You have successfully scanned the QR code.
            </Text>
            <Text style={styles.description}>
              Press “Next” to call for assistance
            </Text>
            <View style={styles.buttonsContainer}>
              <Pressable
                style={({pressed}) => [
                  styles.buttonContainer,
                  pressed && styles.onPress,
                  {backgroundColor: '#8D2828'},
                ]}
                onPress={onCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={({pressed}) => [
                  styles.buttonContainer,
                  pressed && styles.onPress,
                  {backgroundColor: '#3D6712'},
                ]}
                onPress={onNext}>
                <Text style={styles.buttonText}>Next</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={{paddingTop: 20}}>
            <Text
              style={[styles.subtitle, {textAlign: 'left', marginVertical: 4}]}>
              SCAN THE CODE
            </Text>
            <Text style={[styles.subtitle, {marginVertical: 4}]}>AND</Text>
            <Text
              style={[
                styles.subtitle,
                {textAlign: 'right', marginVertical: 4},
              ]}>
              WE’LL HELP YOU
            </Text>
            <View style={styles.descriptionContainer}>
              <Text
                style={[
                  styles.description,
                  {color: '#000000', marginBottom: 0},
                ]}>
                THEY ARE LOCATED EVERY 30 METERS ON EACH OF OUR RACING TRACKS
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ScanQRCode;
