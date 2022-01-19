import { StyleSheet } from 'react-native';
import { colors, appStyles } from '../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		flex: 1,
		justifyContent: 'flex-start',
	},
	image: {
		marginTop: 53,
		width: 100,
		height: 25,
	},
	uploadImage: {},
	documentViewText: {
		...appStyles.rightText,
		marginTop: 135,
		color: colors.gray,
		textAlign: 'left',
		alignSelf: 'flex-start',
	},
	documentText: {
		...appStyles.rightText,
		color: colors.dark,
		fontSize: 14,
	},
	documentUploadContainer: {
		height: 166,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 66,
		marginTop: 8,
		borderRadius: 5,
		backgroundColor: colors.white,
	},
	headerText: {
		...appStyles.bigText,
		paddingTop: 20,
		paddingBottom: 50,
	},
	skipBtn: {
		marginTop: 12,
		justifyContent: 'center',
		alignItems: 'center',
		height: 44,
	},
	text: {
		fontFamily: 'Rubik',
		fontSize: 16,
		color: colors.dark,
	},
});
