import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScanQRCode from './ScanQRCode';
import ScanningResult from './ScanningResult';

const Stack = createNativeStackNavigator();

const Help = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
      <Stack.Screen name="ScanningResult" component={ScanningResult} />
    </Stack.Navigator>
  );
};

export default Help;
