import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 32,
  },
  input: {
    height: 52,
    width: '100%',
    backgroundColor: '#808080',
    borderRadius: 50,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 16,
  },
  datepickersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
  },
  datepickerContainer: {
    justifyContent: 'center',
    height: 52,
    flex: 1,
    borderRadius: 50,
    backgroundColor: '#808080',
  },
  datepickerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 52,
    backgroundColor: '#000000',
    borderRadius: 50,
    marginTop: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
});
