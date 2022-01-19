// @flow
import React from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { LOGO, RETAILS, INFO } from '../../../assets/images';
import { colors } from '../../../constants';
import styles from './styles';

type HeaderProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

export const HeaderComponent = ({ navigation }: HeaderProps) => {
	function pressHandler() {
		Alert.alert('Message', 'in progress');
	}
	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity style={styles.left} onPress={pressHandler}>
				<Image style={styles.imageIcon} source={INFO} />
			</TouchableOpacity>
			<Image style={styles.image} source={LOGO} />
			<TouchableOpacity onPress={pressHandler} style={styles.notifications}>
				<View style={[styles.notificationsCircle, { backgroundColor: colors.white }]} />
				<View style={styles.notificationsImage} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.right} onPress={pressHandler}>
				<Image style={styles.imageIcon} source={RETAILS} />
			</TouchableOpacity>
		</View>
	);
};
