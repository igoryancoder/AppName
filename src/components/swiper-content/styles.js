import { StyleSheet } from 'react-native';
import { appStyles } from '../../constants/styles';

export default StyleSheet.create({
	container: {
		...appStyles.container,
	},
	headerText: {
		...appStyles.bigText,
		paddingVertical: 17,
	},
	infoText: {
		...appStyles.smallText,
	},
	button: { position: 'absolute', bottom: 80 },
});
