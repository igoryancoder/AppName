import { StyleSheet } from 'react-native';
import { appStyles } from '../../../../constants/styles';
import { colors } from '../../../../constants';

export default StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: colors.white,
	},
	headerText: {
		...appStyles.bigHeaderText2,
		width: '100%',
		marginBottom: 15,
		textAlign: 'left',
	},
	container: {
		...appStyles.container,
		flex: 1,
		justifyContent: 'flex-start',
	},
	buttonUp: {
		marginTop: 24,
	},
	button: {
		marginTop: 8,
		marginBottom: 25,
	},
	buttonBottom: {
		position: 'absolute',
		bottom: 24,
	},
	headerContainer: {
		marginTop: 25,
		height: 50,
		width: '100%',
		flexDirection: 'row',
		marginBottom: 25,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	coinNameContainer: {
		width: '100%',
		height: 44,
		backgroundColor: colors.white,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingHorizontal: 16,
	},
	nameContainer: {
		width: '100%',
		height: 30,
		marginBottom: 15,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	line: {
		width: 1,
		height: 15,
		marginHorizontal: 8,
		backgroundColor: colors.notActiveGray,
	},
	icon: {
		fontFamily: 'fontello',
		fontSize: 25,
		color: colors.primary,
	},
	confirmWrapper: {
		height: 35,
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkbox: {
		marginRight: 7,
		fontFamily: 'fontello',
		fontSize: 15,
	},
	faitContainer: {
		marginTop: 9,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	btnContainer: {
		alignSelf: 'flex-start',
		height: 35,
		flexDirection: 'row',
		alignItems: 'center',
	},
	fait: {
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.dark,
	},
	fait2: {
		fontFamily: 'Rubik',
		fontSize: 18,
		color: colors.dark,
	},
	header: {
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.gray,
		marginBottom: 8,
		alignSelf: 'flex-start',
	},
	checkboxText: {
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.dark,
	},
	amount: {
		fontWeight: '600',
	},
	text: {
		marginLeft: 8,
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.dark,
	},
	text2: {
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.dark,
	},
	amountText: {
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
});
