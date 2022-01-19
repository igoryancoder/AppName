import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type PressedTextProps = {
	onPress: () => void,
	texts: any,
	isSmall: boolean,
};

export const PressedText = ({ onPress, texts, buttonStyles, isSmall }: PressedTextProps) => {
	return (
		<TouchableOpacity style={buttonStyles} onPress={onPress}>
			<Text style={[styles.text1, isSmall && { fontSize: 12 }]}>
				{texts[0]} <Text style={[styles.text2, isSmall && { fontSize: 12 }]}>{texts[1]}</Text>
			</Text>
		</TouchableOpacity>
	);
};
