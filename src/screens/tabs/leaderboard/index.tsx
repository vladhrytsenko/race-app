import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {styles} from './styles.ts';
import leaderboard from '../../../assets/data/leaderboard.json';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Loader from '../../../components/Loader';

const palette = ['#EBCA66', '#D8D8D8', '#CD7F32'];

const Leaderboard = () => {
  const {top} = useSafeAreaInsets();

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const delay = Math.floor(Math.random() * 299 + 400);

    setTimeout(() => setLoading(false), delay);
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Loader />}
      <View style={[styles.headerContainer, {paddingTop: top + 12}]}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
      </View>
      <FlatList
        data={loading ? [] : leaderboard}
        contentContainerStyle={styles.listContainer}
        renderItem={({item, index}) => {
          const color = index > 2 ? '#FFFFFF' : '#000000';

          return (
            <View
              style={[
                styles.listItemContainer,
                {backgroundColor: palette[index] || '#212026'},
              ]}>
              <View style={styles.nameContainer}>
                <Text style={[styles.rank, {color}]}>{index + 1}</Text>
                <Text style={[styles.name, {color}]}>{item.name}</Text>
              </View>
              <Text style={[styles.time, {color}]}>{item.time}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Leaderboard;
