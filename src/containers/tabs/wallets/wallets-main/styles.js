import { StyleSheet } from 'react-native';
import { appStyles } from '../../../../constants/styles';
import { colors } from '../../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		paddingTop: 50,
		justifyContent: 'space-between',
		padding: 20,
	},
	headerText: {
		...appStyles.bigHeaderText2,
		width: '100%',
		textAlign: 'left',
	},
	centerContainer: {
		alignItems: 'center',
	},
	info: {
		marginTop: 16,
		fontFamily: 'Rubik',
		fontSize: 18,
		color: colors.gray,
	},
	button: {},
});
