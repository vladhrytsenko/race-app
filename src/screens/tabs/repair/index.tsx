import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CarRepair from './CarRepair';
import RepairInfo from './RepairInfo';

const Stack = createNativeStackNavigator();

const Repair = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CarRepair" component={CarRepair} />
      <Stack.Screen name="RepairInfo" component={RepairInfo} />
    </Stack.Navigator>
  );
};

export default Repair;
