import { StyleSheet } from 'react-native';
import { colors, appStyles } from '../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
	},
	headerText: {
		...appStyles.bigText,
		fontSize: 24,
	},
	imageContainer: {
		marginBottom: 16,
	},
	icon: {
		fontFamily: 'fontello',
		fontSize: 23,
		color: colors.green,
	},
	button: {
		marginTop: 50,
	},
});
