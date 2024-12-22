import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    paddingHorizontal: 16,
  },
  tabButtonContainer: {
    flex: 1,
    height: 44,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
    marginTop: 16,
  },
  scheduleContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  scheduleItemContainer: {
    backgroundColor: '#000000',
    marginVertical: 6,
    borderRadius: 16,
  },
  scheduleItemHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  timeIntervalContainer: {
    height: 35,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: '#05C441',
  },
  timeIntervalText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  date: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  weekday: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 48,
  },
  time: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  to: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  clubInfoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  clubInfoText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  specialOfferContainer: {
    backgroundColor: '#05C44180',
    padding: 16,
    borderRadius: 15,
    marginTop: 24,
  },
  specialOfferTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 6,
  },
  specialOfferDescription: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
