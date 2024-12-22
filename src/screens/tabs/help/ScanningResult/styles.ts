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
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 16,
  },
  description: {
    fontSize: 22,
    color: '#09244B',
    textAlign: 'center',
    marginBottom: 8,
  },
  note: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 52,
    borderRadius: 15,
    backgroundColor: '#8D2828',
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
