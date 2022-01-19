// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { colors } from '../../constants';

type ButtonProps = {
	text: string,
	onPress: () => void,
	buttonStyle: any,
};

export const Button = ({ onPress, text, buttonStyle = {}, isWhite = false }: ButtonProps) => {
	const defButtonStyle = isWhite ? styles.white : styles.button;
	return (
		<TouchableOpacity onPress={onPress} style={{ ...buttonStyle, ...defButtonStyle }}>
			<Text style={[styles.text, {color: isWhite ? colors.primary : colors.white}]}>{text}</Text>
		</TouchableOpacity>
	);
};
