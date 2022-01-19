import { StyleSheet } from 'react-native';
import { colors, appStyles } from '../../constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	contentContainer: {
		flex: 1,
		marginTop: 44,
		paddingHorizontal: 16,
		backgroundColor: colors.white,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	listContainer: {
		flex: 1,
		paddingTop: 10,
	},
	paddingScroll: {
		paddingBottom: 16,
	},
	listStyle: {
		flexGrow: 1,
	},
	close: {
		width: 150,
		height: 26,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	line: {
		height: 6,
		borderRadius: 3,
		backgroundColor: colors.lightGray,
		alignSelf: 'center',
		marginTop: 16,
		width: 35,
	},
	searchContentContainer: {
		marginTop: 11,
	},
	closeButton: {
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.lightGray,
	},
	btnText: {
		fontFamily: 'Rubik',
		fontWeight: '500',
		fontSize: 16,
	},
});
