import { StyleSheet } from 'react-native';
import { appStyles, colors } from '../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		justifyContent: 'flex-start',
	},
	heder: {
		...appStyles.smallText,
		marginTop: 34,
		color: colors.dark,
	},
	balance: {
		...appStyles.bigHeaderText,
		marginTop: 5,
	},
	text1: {
		...appStyles.rightText,
		textAlign: 'center',
		marginTop: 5,
	},
	sum: {
		...appStyles.rightText,
		fontWeight: '500',
	},
	text2: {
		...appStyles.rightText,
		color: colors.gray,
	},
	buttonsContainer: {
		marginTop: 34,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignSelf: 'center',
		width: '100%',
	},
});
