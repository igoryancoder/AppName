import { StyleSheet } from 'react-native';
import { appStyles } from '../../../constants/styles';
import { colors } from '../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		justifyContent: 'flex-start',
	},
	image: {
		marginTop: 53,
		width: 100,
		height: 25,
	},
	icon: {
		marginTop: 120,
		fontFamily: 'fontello',
		color: colors.primary,
		fontSize: 70,
	},
	headerText: {
		...appStyles.bigText,
		paddingTop: 20,
		paddingBottom: 50,
	},
	skipBtn: {
		marginTop: 12,
		justifyContent: 'center',
		alignItems: 'center',
		height: 44,
	},
	text: {
		fontFamily: 'Rubik',
		fontSize: 16,
		color: colors.dark,
	},
});
