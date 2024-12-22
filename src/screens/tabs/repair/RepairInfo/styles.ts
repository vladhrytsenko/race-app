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
    paddingHorizontal: 16,
  },
  title: {
    width: 270,
    fontSize: 40,
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 32,
  },
  contentContainer: {
    flex: 1,
    gap: 2,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  contentImageContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  value: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'right',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginTop: 24,
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
