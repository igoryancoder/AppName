// @flow
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {
	forgotPasswordNewPassActionRequest,
	verificationPhoneActionRequest,
	forgotPasswordSmsActionRequest,
} from '../../../store/actions';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button } from '../../../components';
import { texts } from '../../../constants';
import styles from './styles';

type VerificationScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
	setNewPass: () => void,
	verification: () => void,
	resendCode: (phone: string) => void,
};

const mapDispatchToProps = {
	setNewPass: forgotPasswordNewPassActionRequest,
	verification: verificationPhoneActionRequest,
	resendCode: forgotPasswordSmsActionRequest,
};

export const Verification = compose(connect(null, mapDispatchToProps))(
	({ navigation, setNewPass, resendCode, verification }: VerificationScreenProps) => {
		const { phone, password } = navigation.state.params;
		const [pin, setPin] = useState('');

		function buttonHandlerPress() {
			if (pin.length === 4) {
				if (navigation.state.params && navigation.state.params.isSignUp) {
					verification({ phone, pin, password });
				} else {
					setNewPass({ pin, phone, password });
				}
			} else {
				Alert.alert('Error', 'Please provide valid code');
			}
		}

		useEffect(() => {
			if (pin.length === 4) {
				Keyboard.dismiss();
				// navigation.goBack();
			}
		});

		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>{texts.verification.header}</Text>
				<Text style={styles.text1}>
					{texts.verification.info}
					<Text style={styles.text2}>{phone}</Text>
				</Text>
				<SmoothPinCodeInput
					cellStyle={styles.cell}
					password
					autoFocus
					cellSize={65}
					mask="﹡"
					containerStyle={styles.containerInput}
					keyboardType="number-pad"
					cellStyleFocused={styles.focused}
					value={pin}
					onTextChange={pin => setPin(pin)}
				/>
				<TouchableOpacity style={styles.touchForgotPass} onPress={() => resendCode({ phone, password })}>
					<Text style={styles.resendText}>{texts.verification.resend}</Text>
				</TouchableOpacity>
				<Button buttonStyle={styles.button} onPress={buttonHandlerPress} text={texts.forgotPassword.confirm} />
			</View>
		);
	},
);
