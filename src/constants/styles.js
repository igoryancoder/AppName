import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const appStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 16,
		backgroundColor: colors.mainBackground,
	},
	bigText: {
		fontFamily: 'Rubik',
		fontWeight: '500',
		fontSize: 32,
		textAlign: 'center',
		color: colors.dark,
	},
	bigHeaderText: {
		fontFamily: 'Rubik',
		fontWeight: '500',
		fontSize: 32,
		textAlign: 'center',
		color: colors.dark,
	},
	bigHeaderText2: {
		fontFamily: 'Rubik',
		fontWeight: '500',
		fontSize: 34,
		textAlign: 'center',
		color: colors.dark,
	},
	smallText: {
		fontFamily: 'Rubik',
		fontSize: 16,
		color: colors.gray,
		textAlign: 'center',
	},
	rightText: {
		fontFamily: 'Rubik',
		fontSize: 12,
		color: colors.dark,
	},
});
