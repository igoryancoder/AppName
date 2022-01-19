// @flow
import React, { useState } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from '../icons';
import styles from './styles';

type props = {
	callback: () => void,
	item: any,
	isActive: boolean,
};

export const CoinItem = ({ callback, isActive, item }: props) => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Icon style={{}} icon={item.icon} calculatedHeight={44} calculatedWidth={44} />
				<Text style={styles.text}>{item.name}</Text>
			</View>
			<TouchableOpacity
				onPress={callback}
				style={[styles.checkbox, isActive ? styles.checkboxActive : styles.checkboxNotActive]}
			>
				{/* <Icon style={{}} icon={Icon.icon.checkBox} calculatedHeight={15} calculatedWidth={17} /> // TODO need valid svg */}
			</TouchableOpacity>
		</View>
	);
};
