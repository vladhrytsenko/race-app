import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  emptyHeaderItem: {
    width: 42,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  description: {
    fontSize: 22,
    color: '#09244B',
    textAlign: 'center',
    marginBottom: 8,
  },
  input: {
    height: 52,
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 50,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 16,
  },
  datepickerContainer: {
    justifyContent: 'center',
    height: 52,
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  datepickerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 52,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 12,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  onPress: {
    opacity: 0.7,
  },
});
