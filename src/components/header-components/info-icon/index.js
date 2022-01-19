// @flow
import React from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { INFO } from '../../../assets/images';
import styles from '../header/styles';

type HeaderProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

export const InfoIcon = ({ navigation }: HeaderProps) => {
	function pressHandler() {
		Alert.alert('Message', 'in progress');
	}
	return (
		<TouchableOpacity style={styles.right} onPress={pressHandler}>
			<Image style={styles.imageIcon} source={INFO} />
		</TouchableOpacity>
	);
};
