import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 32,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  scannerContainer: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  subtitle: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 24,
    textTransform: 'uppercase',
  },
  descriptionContainer: {
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 16,
  },
  description: {
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 158,
    height: 52,
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  onPress: {
    opacity: 0.7,
  },
});
