import { StyleSheet } from 'react-native';
import { colors, WINDOW } from '../../constants';

export default StyleSheet.create({
	mainContainer: {
		marginTop: 15,
	},
	container: {
		width: WINDOW.width - 32,
		marginTop: 12,
		paddingHorizontal: 14,
		height: 44,
		borderRadius: 5,
		backgroundColor: colors.white,
	},
	header: {
		color: colors.gray,
		alignSelf: 'flex-start',
		fontFamily: 'Rubik',
		fontSize: 12,
	},
	input: {
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.dark,
	},
	touchSecurity: {
		position: 'absolute',
		paddingTop: 14,
		paddingRight: 14,
		height: 44,
		right: 0,
	},
	icon: {
		color: colors.notActiveGray,
	},
	modalButton: { backgroundColor: 'transparent', width: 30, height: 20, marginTop: -20 },
});
