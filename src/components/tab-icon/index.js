// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, WINDOW } from '../../constants';

type TabBarIconProps = {
	focused: boolean,
	iconSource: any,
};

const styles = StyleSheet.create({
	view: {
		justifyContent: 'center',
		alignItems: 'center',
		width: WINDOW.width / 4,
	},
	image: {
		fontFamily: 'fontello',
		fontSize: 24,
	},
});

export const TabBarIcon = ({ focused, iconSource }: TabBarIconProps) => (
	<View style={styles.view}>
		<Text style={[styles.image, { color: focused ? colors.primary : colors.gray }]}>{iconSource[Number(focused)]}</Text>
	</View>
);
