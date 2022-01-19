// @flow
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from '../icons';
import styles from './styles';

type CounButtonProps = {
	val: any,
	onPress: () => void,
	buttonStyle: any,
};

export const CoinButton = ({ onPress, val, buttonStyle = {}, buttonHeader }: CounButtonProps) => {
	return (
		<View style={{ ...styles.container, ...buttonStyle }}>
			<Text style={styles.text}>{buttonHeader}</Text>
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<Text style={styles.text}>{val.name}</Text>
				{val.icon && <Icon style={{}} icon={val.icon} calculatedHeight={23} calculatedWidth={23} />}
			</TouchableOpacity>
		</View>
	);
};
