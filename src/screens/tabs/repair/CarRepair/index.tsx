import React, {useState} from 'react';
import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import {styles} from './styles.ts';
import backgroundSource from '../../../../assets/images/repair_bg.png';
import Loader from '../../../../components/Loader';

interface ICarRepair {
  navigation: any;
}

const CarRepair = ({navigation}: ICarRepair) => {
  const {top} = useSafeAreaInsets();

  const [username, setUsername] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('');
  const [date, setDate] = useState<Date>(moment().toDate());
  const [time, setTime] = useState<Date>(moment().toDate());
  const [datePickerIsOpen, setDatePickerIsOpen] = useState<boolean>(false);
  const [timePickerIsOpen, setTimePickerIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onConfirm = () => {
    const delay = Math.floor(Math.random() * 299 + 400);
    const routeData = {
      username,
      reason,
      brand,
      urgency,
      date: moment(date).format('DD.MM.YYYY'),
      time: moment(date).format('HH:mm'),
      code: Math.floor(Math.random() * (99999 - 10000 + 1) + 1000),
    };

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('RepairInfo', routeData);

      setUsername('');
      setReason('');
      setBrand('');
      setUrgency('');
      setDate(moment().toDate());
      setTime(moment().toDate());
    }, delay);
  };

  return (
    <ImageBackground
      source={backgroundSource}
      style={[styles.container, {paddingTop: top}]}
      resizeMode="cover">
      {loading && <Loader />}

      <Text style={styles.title}>CAR REPAIR</Text>

      <View style={styles.contentContainer}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="User name"
          placeholderTextColor="#FFFFFF70"
        />

        <TextInput
          value={reason}
          onChangeText={setReason}
          style={styles.input}
          placeholder="Reason for the breakdown"
          placeholderTextColor="#FFFFFF70"
        />

        <TextInput
          value={brand}
          onChangeText={setBrand}
          style={styles.input}
          placeholder="Car brand"
          placeholderTextColor="#FFFFFF70"
        />

        <TextInput
          value={urgency}
          onChangeText={setUrgency}
          style={styles.input}
          placeholder="Urgency of repair"
          placeholderTextColor="#FFFFFF70"
        />

        <View style={styles.datepickersContainer}>
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
        </View>

        <Pressable
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}
          onPress={onConfirm}>
          <Text style={styles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default CarRepair;
