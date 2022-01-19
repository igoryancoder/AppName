import { StyleSheet } from 'react-native';
// import { colors, WINDOW } from '../../constants';
import { appStyles } from '../../../constants/styles';

export default StyleSheet.create({
	container: {
		...appStyles.container,
		justifyContent: 'flex-start',
		paddingTop: 10,
	},
	headerText: {
		...appStyles.bigText,
	},
	button: {
		marginTop: 15,
	},
	touch: {
		alignSelf: 'center',
	},
	bottomTouch: {
		alignSelf: 'center',
		paddingVertical: 24,
	},
	termsContainer: {
		height: 35,
		flexDirection: 'row',
		alignItems: 'center',
	},
	agreeWrapper: {
		height: 35,
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	termsCheckbox: {
		marginRight: 7,
		fontFamily: 'fontello',
		fontSize: 15,
	},
});
