import { StyleSheet } from 'react-native';
// import { colors, WINDOW } from '../../constants';
import { appStyles } from '../../../constants/styles';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		justifyContent: 'flex-start',
		paddingTop: 30,
	},
	headerText: {
		...appStyles.bigText,
		paddingVertical: 17,
	},
	button: {
		marginTop: 54,
	},
});
