import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  titleStyle: {
    color: '#FFFFFF',
    fontSize: 40,
    padding: 10,
  },
  contentContainer: {
    padding: 16,
    backgroundColor: '#000000',
  },
  backgroundImage: {
    height: 300,
    width: '100%',
  },
  bookingInfoTitle: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  bookingInfoWrapper: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  bookingInfoContainer: {
    gap: 8,
  },
  bookingInfoText: {
    color: '#FFFFFF',
  },
  contentHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  contentTitle: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  contentComplexity: {
    fontSize: 20,
    color: '#3F7E01',
    textTransform: 'lowercase',
  },
  contentText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginTop: 40,
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
  },
  onPress: {
    opacity: 0.7,
  },
});
