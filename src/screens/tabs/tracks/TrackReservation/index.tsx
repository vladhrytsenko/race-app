import React, {useState} from 'react';
import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import {styles} from './styles.ts';
import BackIcon from '../../../../assets/icons/back_button.svg';
import Loader from '../../../../components/Loader';

interface ITrackReservation {
  navigation: any;
  route: any;
}

const TrackReservation = ({navigation, route}: ITrackReservation) => {
  const {imageSrc, title} = route.params;

  const {top} = useSafeAreaInsets();

  const [username, setUsername] = useState<string>('');
  const [date, setDate] = useState<Date>(moment().toDate());
  const [time, setTime] = useState<Date>(moment().toDate());
  const [datePickerIsOpen, setDatePickerIsOpen] = useState<boolean>(false);
  const [timePickerIsOpen, setTimePickerIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onNext = () => {
    setLoading(true);

    const delay = Math.floor(Math.random() * 299 + 400);

    setTimeout(() => {
      const data = {
        ...route.params,
        username,
        date: moment(date).format('YYYY-MM-DD'),
        time: moment(time).format('hh:mm'),
        code: (Math.random() + 1).toString(36).substring(7).toUpperCase(),
      };

      navigation.navigate('ReservationInfo', data);

      setLoading(false);
    }, delay);
  };

  return (
    <ImageBackground
      source={imageSrc}
      style={[styles.container, {paddingTop: top}]}>
      {loading && <Loader />}

      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.emptyHeaderItem} />
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="User name"
          placeholderTextColor="#FFFFFF70"
        />
        <>
          <Pressable
            style={styles.datepickerContainer}
            onPress={() => setDatePickerIsOpen(true)}>
            <Text style={styles.datepickerText}>
              {moment(date).format('DD.MM.YYYY')}
            </Text>
          </Pressable>
          <DatePicker
            modal
            mode="date"
            open={datePickerIsOpen}
            date={date}
            onConfirm={d => {
              setDatePickerIsOpen(false);
              setDate(d);
            }}
            onCancel={() => {
              setDatePickerIsOpen(false);
            }}
          />
        </>

        <>
          <Pressable
            style={styles.datepickerContainer}
            onPress={() => setDatePickerIsOpen(true)}>
            <Text style={styles.datepickerText}>
              {moment(date).format('HH:mm')}
            </Text>
          </Pressable>
          <DatePicker
            modal
            mode="time"
            open={timePickerIsOpen}
            date={time}
            onConfirm={t => {
              setTimePickerIsOpen(false);
              setTime(t);
            }}
            onCancel={() => {
              setTimePickerIsOpen(false);
            }}
          />
        </>

        <Pressable
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}
          onPress={onNext}>
          <Text style={styles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default TrackReservation;
