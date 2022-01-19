// @flow
import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { forgotPasswordSmsActionRequest } from '../../../store/actions';
import { validationFunc } from '../../../utils/validations';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, Input, KeyboardStaticAvoid } from '../../../components';
import { texts } from '../../../constants';
import styles from './styles';

type ForgotPasswordScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
	getSms: () => void,
};

const mapDispatchToProps = {
	getSms: forgotPasswordSmsActionRequest,
};

export const ForgotPassword = compose(connect(null, mapDispatchToProps))(
	({ navigation, getSms }: ForgotPasswordScreenProps) => {
		const [phone, onNumberChange] = useState('');
		const [password, onPasswordChange] = useState('');
		const [confirmPassword, onConfirmPasswordChange] = useState('');
		function buttonHandlerPress() {
			if (validationFunc([phone, password, confirmPassword])) {
				getSms({ phone, password });
			}
		}
		return (
			<KeyboardStaticAvoid fullheight contentContainerStyle={styles.container}>
				<Text style={styles.headerText}>{texts.forgotPassword.header}</Text>
				<Input
					value={phone}
					onChange={onNumberChange}
					name={texts.forgotPassword.number}
					placeholder={texts.forgotPassword.numberEnter}
					keyboardType="phone-pad"
				/>
				<Input
					value={password}
					onChange={onPasswordChange}
					secureTextEntry
					name={texts.forgotPassword.password}
					placeholder={texts.forgotPassword.passEnter}
				/>
				<Input
					value={confirmPassword}
					onChange={onConfirmPasswordChange}
					secureTextEntry
					name={texts.forgotPassword.confirmPassword}
					placeholder={texts.forgotPassword.confirmPassEnter}
				/>
				<Button buttonStyle={styles.button} onPress={buttonHandlerPress} text={texts.forgotPassword.confirm} />
			</KeyboardStaticAvoid>
		);
	},
);
