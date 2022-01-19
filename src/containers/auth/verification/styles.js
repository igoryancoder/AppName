import { StyleSheet } from 'react-native';
import { colors, WINDOW, appStyles } from '../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		justifyContent: 'flex-start',
		paddingTop: 50,
	},
	containerInput: {
		width: WINDOW.width - 35,
		justifyContent: 'center',
	},
	focused: {
		borderColor: 'black',
	},
	cell: {
		borderBottomWidth: 1,
		borderColor: colors.gray,
	},
	headerText: {
		...appStyles.bigText,
	},
	text1: {
		paddingTop: 18,
		paddingBottom: 42,
		textAlign: 'center',
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.gray,
	},
	touchForgotPass: {
		paddingTop: 15,
		paddingRight: 35,
		height: 40,
		justifyContent: 'center',
		marginBottom: 25,
		alignSelf: 'flex-end',
	},
	resendText: {
		...appStyles.rightText,
	},
	text2: {
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.dark,
		fontWeight: '500',
	},
	button: {},
});
