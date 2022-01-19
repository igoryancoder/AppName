import { StyleSheet } from 'react-native';
import { appStyles, colors } from '../../constants';

export default StyleSheet.create({
	container: {
		height: 70,
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	button: {
		backgroundColor: colors.white,
		width: '100%',
		height: 44,
		paddingHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
	},
	icon: {
		fontFamily: 'fontello',
		fontSize: 16,
		color: colors.gray,
		transform: [{ rotate: '180deg' }],
	},
	text: {
		...appStyles.smallText,
		width: '100%',
		textAlign: 'left',
		color: colors.gray,
	},
});
