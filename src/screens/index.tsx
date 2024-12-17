import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {styles} from './styles.ts';
import GetStarted from './GetStarted';
import TabNavigation from './tabs';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigation;
