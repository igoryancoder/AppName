import { StyleSheet } from 'react-native';
import { colors, appStyles } from '../../constants';

export default StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		marginTop: 16,
		height: 44,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	icon: {
		color: colors.primary,
		fontFamily: 'fontello',
		fontSize: 38,
	},
	text: {
		marginLeft: 10,
		fontFamily: 'Rubik',
		fontSize: 16,
		color: colors.dark,
	},
	checkbox: {
		height: 28,
		width: 28,
		borderRadius: 14,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkboxNotActive: {
		borderWidth: 1,
		borderColor: colors.gray,
	},
	checkboxActive: {
		backgroundColor: colors.primary,
	},
	checkIcon: {
		color: colors.white,
		fontFamily: 'fontello',
		fontSize: 14,
	},
});
