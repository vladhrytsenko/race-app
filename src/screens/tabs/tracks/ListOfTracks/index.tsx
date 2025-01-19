import React, {useMemo, useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles.ts';
import {tracks} from '../../../../assets/data/tracks.ts';
import Loader from '../../../../components/Loader';

interface IListOfTracks {
  navigation: any;
}

const ListOfTracks = ({navigation}: IListOfTracks) => {
  const {top} = useSafeAreaInsets();

  const [activeTab, setActiveTab] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const data = useMemo(() => {
    return tracks[activeTab];
  }, [activeTab]);

  const onNext = () => {
    setLoading(true);

    const delay = Math.floor(Math.random() * 299 + 400);

    setTimeout(() => {
      navigation.navigate('TrackReservation', tracks[activeTab]);

      setLoading(false);
    }, delay);
  };

  return (
    <>
      {loading && <Loader />}

      <ScrollView
        style={[styles.screenContainer, {paddingTop: top + 16}]}
        showsVerticalScrollIndicator={false}>
        <Image source={data.imageSrc} style={styles.backgroundImage} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainerStyle}>
          {tracks.map((track, i) => {
            const isActive = track.title === data.title;

            return (
              <Pressable
                key={track.title}
                style={[
                  styles.tabContainerStyle,
                  isActive && styles.tabContainerActiveStyle,
                ]}
                onPress={() => setActiveTab(i)}>
                <Text
                  style={[
                    styles.tabText,
                    isActive && styles.tabTextActiveStyle,
                  ]}>
                  {track.title}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.contentHeaderContainer}>
            <Text style={styles.contentTitle}>
              {data.title}{' '}
              <Text style={styles.contentComplexity}>{data.complexity}</Text>
            </Text>
            <Text style={styles.contentText}>{data.distance}km</Text>
          </View>

          <Text style={styles.contentText}>{data.description}</Text>

          <Pressable
            style={({pressed}) => [
              styles.buttonContainer,
              pressed && styles.onPress,
            ]}
            onPress={onNext}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default ListOfTracks;
