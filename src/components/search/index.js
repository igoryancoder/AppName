// @flow
import React from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '../../constants';
import styles from './styles';

type SearchProps = {
	value: string,
	onChangeText: (text: string) => mixed,
	placeholder?: string,
};

export const Search = ({ onChangeText, value, placeholder = 'Search' }: SearchProps) => (
	<View>
		<TextInput
			placeholder={placeholder}
			style={styles.searchInputLight}
			value={value}
			placeholderTextColor={colors.gray}
			keyboardType="default"
			onChangeText={onChangeText}
			underlineColorAndroid="transparent"
		/>
	</View>
);
