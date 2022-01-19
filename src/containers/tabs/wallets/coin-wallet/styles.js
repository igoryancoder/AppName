import { StyleSheet } from 'react-native';
import { appStyles } from '../../../../constants/styles';
import { colors } from '../../../../constants';

export default StyleSheet.create({
  container: {
    ...appStyles.container,
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerText: {
    ...appStyles.bigHeaderText2,
    width: '100%',
    textAlign: 'left',
  },
  buttonUp: {
    marginTop: 20
  },
  button: {
    marginTop: 8
  },
  coinContainer: {
    marginTop: 24,
    width: '100%',
    height: 245,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 16
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
    marginTop: 5,
    alignSelf: 'flex-end',
    fontFamily: 'Rubik',
    fontSize: 16,
    color: colors.dark
  },
  balanceContainer: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  balance: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: colors.gray
  }
});
