import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {styles} from './styles';
import Calendar from './calendar';
import Tracks from './tracks';
import Help from './help';
import Repair from './repeir';
import Leaderboard from './leaderboard';
import CalendarIcon from '../../components/svgs/CalendarIcon.tsx';
import TracksIcon from '../../components/svgs/TracksIcon.tsx';
import HelpIcon from '../../components/svgs/HelpIcon.tsx';
import RepairIcon from '../../components/svgs/RepairIcon.tsx';
import LeaderboardIcon from '../../components/svgs/LeaderboardIcon.tsx';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  color: string;
}

const CalendarTabBarIcon = ({color}: TabBarIconProps) => (
  <CalendarIcon color={color} />
);
const TracksTabBarIcon = ({color}: TabBarIconProps) => (
  <TracksIcon color={color} />
);
const HelpTabBarIcon = ({color}: TabBarIconProps) => <HelpIcon color={color} />;
const RepairTabBarIcon = ({color}: TabBarIconProps) => (
  <RepairIcon color={color} />
);
const LeaderboardTabBarIcon = ({color}: TabBarIconProps) => (
  <LeaderboardIcon color={color} />
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#EEEEEE',
        tabBarInactiveTintColor: '#808080',
      }}>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: CalendarTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Tracks"
        component={Tracks}
        options={{
          tabBarIcon: TracksTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: HelpTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Repair"
        component={Repair}
        options={{
          tabBarIcon: RepairTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: LeaderboardTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
