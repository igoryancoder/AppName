import { StyleSheet } from 'react-native';
import { colors, appStyles } from '../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
	},
	image: {
		marginTop: 60,
	},
	headerText: {
		...appStyles.bigText,
		paddingTop: 40,
	},
	touchForgotPass: {
		paddingVertical: 15,
		marginBottom: 25,
		alignSelf: 'flex-end',
	},
	forgotPassText: {
		...appStyles.rightText,
	},
	touch: {
		position: 'absolute',
		bottom: 27,
	},
	signUpText1: {
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.dark,
	},
	signUpText2: {
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.primary,
		fontWeight: '500',
	},
});
