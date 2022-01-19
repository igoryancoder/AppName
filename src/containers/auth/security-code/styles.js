import { StyleSheet } from 'react-native';
import { appStyles } from '../../../constants/styles';

export default StyleSheet.create({
	container: {
		...appStyles.container,
	},
	image: {
		marginTop: 53,
		width: 100,
		height: 25,
	},
	headerText: {
		...appStyles.bigText,
		paddingVertical: 40,
	},
});
