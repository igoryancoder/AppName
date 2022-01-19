import { StyleSheet } from 'react-native';
import { colors, WINDOW } from '../../../constants';

export default StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		width: WINDOW.width,
		height: 100,
		backgroundColor: colors.mainBackground,
	},
	icon: {
		marginRight: 9,
		color: colors.dark,
		fontSize: 22,
		fontFamily: 'fontello',
	},
	circle: {
		width: 24,
		height: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: colors.dark,
	},
	notifications: {
		position: 'absolute',
		right: 70,
		width: 26,
		height: 26,
	},
	notificationsImage: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: 24,
		height: 24,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: colors.dark,
	},
	image: {
		width: 100,
		height: 25,
	},
	notificationsCircle: {
		zIndex: 99,
		position: 'absolute',
		right: 0,
		top: 0,
		width: 8,
		height: 8,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: colors.dark,
	},
	left: {
		position: 'absolute',
		left: 33,
		alignItems: 'center',
		justifyContent: 'center',
	},
	right: {
		position: 'absolute',
		right: 26,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageIcon: {
		width: 25,
		height: 25,
	},
});
