// @flow
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../constants';

type buttonProps = {
	callBack: () => void,
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 102,
		height: 102,
		borderRadius: 10,
		backgroundColor: colors.primary,
	},
	iconContainer: {
		width: 32,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		borderColor: colors.white,
		borderWidth: 1,
	},
	icon: {
		fontFamily: 'fontello',
		color: colors.white,
		fontSize: 25,
	},
	text: {
		marginTop: 5,
		fontFamily: 'Rubik',
		fontSize: 14,
		color: colors.white,
		textAlign: 'center',
	},
});

export const ButtonComponent = ({ callBack, data }: buttonProps) => (
	<TouchableOpacity onPress={() => callBack(data.rout)} style={styles.button}>
		<View style={styles.iconContainer}>
			<Text style={styles.icon}>{data.icon}</Text>
		</View>
		<Text style={styles.text}>{data.text}</Text>
	</TouchableOpacity>
);
