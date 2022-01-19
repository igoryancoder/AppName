import { StyleSheet } from 'react-native';
import { colors, WINDOW } from '../../constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapperStyle: {
		backgroundColor: 'transparent',
		paddingVertical: 30,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonStyle: {
		width: (WINDOW.width - 32) / 3,
		height: 50,
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	labelStyle: {
		fontFamily: 'Rubik',
		color: colors.dark,
		fontSize: 36,
	},
	textStyle: {
		fontFamily: 'Rubik',
		color: colors.dark,
		fontSize: 16,
	},
	close: {
		height: WINDOW.height - 260,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	field: {
		width: 16,
		height: 16,
		borderRadius: 8,
	},
	button: {
		color: colors.primary,
		fontSize: 32,
		fontFamily: 'fontello',
	},
	fieldContainer: {
		width: WINDOW.width / 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	delete: {
		color: colors.dark,
		fontSize: 16,
		fontFamily: 'fontello',
	},
});
