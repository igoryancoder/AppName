import { StyleSheet } from 'react-native';
import { appStyles } from '../../../../constants/styles';
import { colors } from '../../../../constants';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		flex: 1,
		justifyContent: 'flex-start',
	},
	headerText: {
		...appStyles.bigHeaderText2,
		width: '100%',
		textAlign: 'left',
	},
});
