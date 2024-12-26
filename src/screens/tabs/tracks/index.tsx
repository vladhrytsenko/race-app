import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListOfTracks from './ListOfTracks';
import TrackReservation from './TrackReservation';
import ReservationInfo from './ReservationInfo';

const Stack = createNativeStackNavigator();

const Tracks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListOfTracks" component={ListOfTracks} />
      <Stack.Screen name="TrackReservation" component={TrackReservation} />
      <Stack.Screen name="ReservationInfo" component={ReservationInfo} />
    </Stack.Navigator>
  );
};

export default Tracks;
