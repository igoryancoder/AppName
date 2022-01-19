import { StyleSheet } from 'react-native';
import { appStyles, colors } from '../../constants';

export default StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		width: '100%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
	},
	white: {
		backgroundColor: colors.white,
		borderWidth: 2,
		borderColor: colors.primary,
		width: '100%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
	},
	text: {
		...appStyles.smallText,
		color: colors.white,
		fontWeight: '500',
	},
});
