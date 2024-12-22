import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import moment from 'moment';

import {styles} from './styles';
import Loader from '../../../components/Loader';
import schedule from '../../../assets/data/schedule.json';
import backgroundSource from '../../../assets/images/repair_info_bg.png';

const Calendar = () => {
  const {top} = useSafeAreaInsets();

  const [activeTab, setActiveTab] = useState<string>('Schedule');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const delay = Math.floor(Math.random() * 600 + 1000);

    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, []);

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      {loading && <Loader />}
      <View>
        <Text style={styles.headerTitle}>
          {activeTab === 'Schedule'
            ? 'Track our working hours'
            : 'Club Information'}
        </Text>

        <View style={styles.tabsContainer}>
          <Pressable
            style={[
              styles.tabButtonContainer,
              {
                backgroundColor:
                  activeTab === 'Schedule' ? '#FFFFFF' : '#393939',
              },
            ]}
            onPress={() => setActiveTab('Schedule')}>
            <Text
              style={[
                styles.tabButtonText,
                {color: activeTab === 'Schedule' ? '#000000' : '#FFFFFF'},
              ]}>
              Schedule
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabButtonContainer,
              {backgroundColor: activeTab === 'Club' ? '#FFFFFF' : '#393939'},
            ]}
            onPress={() => setActiveTab('Club')}>
            <Text
              style={[
                styles.tabButtonText,
                {color: activeTab === 'Club' ? '#000000' : '#FFFFFF'},
              ]}>
              Club
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'Schedule' ? (
          <FlatList
            data={loading ? [] : schedule}
            contentContainerStyle={styles.scheduleContainer}
            renderItem={({item}) => (
              <View style={styles.scheduleItemContainer}>
                <View style={styles.scheduleItemHeaderContainer}>
                  <View
                    style={[
                      styles.timeIntervalContainer,
                      {backgroundColor: '#05C441'},
                    ]}>
                    <Text style={styles.timeIntervalText}>Start</Text>
                  </View>
                  <Text style={styles.date}>{item.date}</Text>
                  <View
                    style={[
                      styles.timeIntervalContainer,
                      {backgroundColor: '#FB3E3E'},
                    ]}>
                    <Text style={styles.timeIntervalText}>End</Text>
                  </View>
                </View>
                <Text style={styles.weekday}>
                  {moment(item.date, 'YYYY-MM-DD').format('dddd')}
                </Text>
                <View style={styles.timeContainer}>
                  <Text style={styles.time}>{item.fromTime}</Text>
                  <Text style={styles.to}>to</Text>
                  <Text style={styles.time}>{item.toTime}</Text>
                </View>
              </View>
            )}
            keyExtractor={({id}) => id}
          />
        ) : (
          <ImageBackground
            source={backgroundSource}
            style={styles.clubInfoContainer}>
            <Text style={styles.clubInfoText}>
              In our club, to ride on our snowmobiles, you must be a member of
              the club for a long period. However, we allow you to use all our
              tracks with your own vehicles. In case of a breakdown, we can
              repair them
            </Text>
            <View style={styles.specialOfferContainer}>
              <Text style={styles.specialOfferTitle}>2025.01.01</Text>
              <Text style={styles.specialOfferDescription}>
                New Year’s Eve celebration, everyone is welcome
              </Text>
            </View>
          </ImageBackground>
        )}
      </View>
    </View>
  );
};

export default Calendar;
