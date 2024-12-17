import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 100,
    color: '#ffffff',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: -35,
    marginLeft: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    width: '100%',
    paddingLeft: 24,
    paddingRight: 12,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    marginBottom: 24,
  },
  buttonTitle: {
    fontSize: 20,
  },
  buttonIconContainer: {
    justifyContent: 'center',
    height: 54,
    width: 95,
    borderRadius: 50,
    backgroundColor: '#000000',
  },
  onPress: {
    opacity: 0.7,
  },
});
