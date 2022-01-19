import { StyleSheet } from 'react-native';
import { colors, WINDOW } from '../../constants';
import { appStyles } from '../../constants/styles';

export default StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: colors.white,
		marginTop: 23,
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: colors.white,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
	},
	notActiveContainer: {
		marginBottom: 17,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
	},
	notActiveHeader: {
		color: colors.gray,
	},
	arrow: {
		position: 'absolute',
		transform: [{ rotate: '270deg' }],
		top: 16,
		right: 16,
		fontFamily: 'fontello',
		color: colors.gray,
	},
	contentContainer: {
		width: '100%',
		height: 212,
		backgroundColor: colors.white,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
		marginBottom: 17,
		paddingBottom: 20,
		paddingHorizontal: 22,
	},
	refCodeInput: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: colors.gray,
		width: '100%',
		height: 44,
		paddingHorizontal: 7,
	},
	header: {
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.dark,
	},
	info: {
		paddingBottom: 15,
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.dark,
	},
});
