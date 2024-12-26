import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  tabTextContainerStyle: {
    backgroundColor: '#000000',
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: '#3F7E01',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tabTextActiveStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContainer: {
    padding: 16,
  },
  contentHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
