import { StyleSheet } from 'react-native';
import { appStyles } from '../../../../constants/styles';
import { colors } from '../../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		flex: 1,
		justifyContent: 'flex-start',
	},
	icon: {
		marginTop: 111,
	},
	buttonBottom: {
		marginTop: 50,
	},
	mainHeader: {
		marginTop: 24,
		fontFamily: 'Rubik',
		fontWeight: '500',
		color: colors.dark,
		fontSize: 24,
	},
	header: {
		marginTop: 40,
		fontFamily: 'Rubik',
		fontWeight: '500',
		color: colors.dark,
		fontSize: 14,
	},
	headerText: {
		marginTop: 8,
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.gray,
	},
	amountText: {
		marginTop: 8,
		fontFamily: 'Rubik',
		fontSize: 18,
		color: colors.dark,
		fontWeight: '500',
	},
	amountName: {
		fontFamily: 'Rubik',
		fontSize: 18,
		color: colors.dark,
		fontWeight: '300',
	},
	key: {
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.dark,
	},
	mony: {
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.dark,
	},
});
