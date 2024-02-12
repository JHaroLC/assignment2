import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gui: {
    flex: 1,
    backgroundColor: '#F0F',
    borderWidth: 8,
    padding: 3,
  },
  banner: {
    flex: 0.25,
    justifyContent: 'space-around',
    backgroundColor: '#AFF',
    borderWidth: 8,
    padding: 5,
  },
  info: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0FF',
    borderWidth: 6,
    padding: 10,
  },
  stats: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  game: {
    flex: 1,
    backgroundColor: '#BFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 8,
    borderLeftWidth: 8,
    overflow: 'hidden',
  },
  pause: {
    flex: 0.25,
    backgroundColor: '#0FF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 8,
  },
  grid: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  highlighted: {
    backgroundColor: 'green',
  },
  missed: {
    backgroundColor: 'red',
  },
});

export default styles;