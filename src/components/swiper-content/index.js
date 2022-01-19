// @flow
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from '../../components/button';
import styles from './styles';

type WelcomeScreenContentCardProps = {
	item: {
		image: any,
		header: string,
		info: string,
	},
	callback: () => void,
};

export const SwiperContent = ({ item, callback }: WelcomeScreenContentCardProps) => (
	<View style={styles.container}>
		<Image source={item.image} />
		<Text style={styles.headerText}>{item.header}</Text>
		<Text style={styles.infoText}>{item.info}</Text>
		<Button buttonStyle={styles.button} onPress={callback} text={item.buttonText} />
	</View>
);
