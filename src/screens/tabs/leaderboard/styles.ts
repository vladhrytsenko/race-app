import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    paddingBottom: 12,
    backgroundColor: '#000000',
  },
  headerTitle: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 20,
    borderRadius: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  rank: {
    fontSize: 24,
    fontWeight: '500',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  time: {
    fontSize: 20,
    fontWeight: '500',
  },
});
