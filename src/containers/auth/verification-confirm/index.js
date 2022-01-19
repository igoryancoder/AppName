// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button, Icon } from '../../../components';
import { texts, LOGIN_SCREEN } from '../../../constants';
import styles from './styles';

type VerificationScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const VerificationConfirm = ({ navigation }: VerificationScreenProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Icon style={{}} icon={Icon.icons.success} calculatedHeight={70} calculatedWidth={70} />
			</View>
			<Text style={styles.headerText}>{texts.verificationConfirm.header}</Text>
			<Button
				buttonStyle={styles.button}
				onPress={() => navigation.navigate(LOGIN_SCREEN)}
				text={texts.forgotPassword.confirm}
			/>
		</View>
	);
};
