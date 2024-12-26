import React, {useState} from 'react';
import {NativeScrollEvent, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabbedHeaderPager} from 'react-native-sticky-parallax-header';
import {useSharedValue} from 'react-native-reanimated';

import {styles} from './styles.ts';
import {tracks} from '../../../../assets/data/tracks.ts';
import Loader from '../../../../components/Loader';

interface IListOfTracks {
  navigation: any;
}

const ListOfTracks = ({navigation}: IListOfTracks) => {
  const {top} = useSafeAreaInsets();
  const scrollValue = useSharedValue(0);

  const [activeTab, setActiveTab] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const onScroll = (e: NativeScrollEvent) => {
    'worklet';

    scrollValue.value = e.contentOffset.y;
  };

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
      <TabbedHeaderPager
        containerStyle={styles.screenContainer}
        backgroundImage={tracks[activeTab].imageSrc}
        tabTextContainerStyle={styles.tabTextContainerStyle}
        tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
        tabTextStyle={styles.tabText}
        tabTextActiveStyle={styles.tabTextActiveStyle}
        tabWrapperStyle={styles.tabWrapperStyle}
        tabsContainerStyle={[styles.tabsContainerStyle, {paddingTop: top}]}
        onScroll={onScroll}
        tabs={tracks}
        onChangeTab={(_, index) => setActiveTab(index)}
        showsVerticalScrollIndicator={false}>
        {tracks.map((tab, i) => (
          <View key={i} style={styles.contentContainer}>
            <View style={styles.contentHeaderContainer}>
              <Text style={styles.contentTitle}>
                {tab.title}{' '}
                <Text style={styles.contentComplexity}>{tab.complexity}</Text>
              </Text>
              <Text style={styles.contentText}>{tab.distance}km</Text>
            </View>

            <Text style={styles.contentText}>{tab.description}</Text>

            <Pressable
              style={({pressed}) => [
                styles.buttonContainer,
                pressed && styles.onPress,
              ]}
              onPress={onNext}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
          </View>
        ))}
      </TabbedHeaderPager>
    </>
  );
};

export default ListOfTracks;
