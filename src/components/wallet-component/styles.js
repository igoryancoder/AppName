import { StyleSheet } from 'react-native';
import { appStyles, colors } from '../../constants';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    height: 78,
    width: '100%',
    borderRadius: 5,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    padding: 16
  },
  noFrozen: {
    borderRadius: 5,
  },
  frozenStyles: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  upContainer: {
    height: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    marginLeft: 7,
    fontFamily: 'Rubik',
    fontSize: 16,
    color: colors.dark
  },
  icon: {
    fontFamily: 'fontello',
    fontSize: 22,
    color: colors.primary,
  },
  monyText: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '500',
  },
  dollars: {
    alignSelf: 'flex-end',
    fontFamily: 'Rubik',
    fontSize: 16,
    color: colors.gray
  }
});
