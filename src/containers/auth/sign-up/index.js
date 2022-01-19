// @flow
import React, { useState } from 'react';
import { Text, Image, ScrollView, View, Linking, TouchableOpacity, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { registrationActionRequest } from '../../../store/actions';
import { validationFunc } from '../../../utils/validations';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, Input, KeyboardStaticAvoid, PressedText, CodeDropDown } from '../../../components';
import { texts, colors, VERIFICATION_CODE_SCREEN } from '../../../constants';
import styles from './styles';

type SignUpScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
	registration: () => void,
};

const mapDispatchToProps = {
	registration: registrationActionRequest,
};

export const SignUp = compose(connect(null, mapDispatchToProps))(({ navigation, registration }: SignUpScreenProps) => {
	const [isAgree, setTermsCondition] = useState(false);
	const [refCode, setReferenceCode] = useState('');
	const [name, onNameChange] = useState('');
	const [phone, onNumberChange] = useState('');
	const [password, onPasswordChange] = useState('');
	const [confirmPassword, onConfirmPasswordChange] = useState('');

	function buttonHandlerPress() {
		if (!isAgree) {
			Alert.alert('Message', 'Please checked Terms & Conditions');
			return;
		}
		if (validationFunc([phone, password, confirmPassword])) {
			registration({ phone, password });
		}
	}
	function termsOpenHandler() {
		Linking.openURL('https://google.com');
	}
	return (
		<KeyboardStaticAvoid fullheight contentContainerStyle={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.headerText}>{texts.signUp.header}</Text>
				<Input
					value={name}
					onChange={onNameChange}
					name={texts.signUp.name}
					placeholder={texts.signUp.namePlaceholder}
				/>
				<Input
					isCountryCode
					value={phone}
					onChange={onNumberChange}
					name={texts.signUp.number}
					placeholder={texts.signUp.numberEnter}
					keyboardType="phone-pad"
				/>
				<Input
					value={password}
					onChange={onPasswordChange}
					secureTextEntry
					name={texts.signUp.password}
					placeholder={texts.signUp.passEnter}
				/>
				<Input
					value={confirmPassword}
					onChange={onConfirmPasswordChange}
					secureTextEntry
					name={texts.signUp.confirmPassword}
					placeholder={texts.signUp.confirmPassEnter}
				/>
				<CodeDropDown callback={setReferenceCode} />
				<View style={styles.termsContainer}>
					<TouchableOpacity style={styles.agreeWrapper} onPress={() => setTermsCondition(true)}>
						<Text style={[styles.termsCheckbox, { color: isAgree ? colors.primary : colors.gray }]}>
							{isAgree ? '\uE81C' : '\uE81D'}
						</Text>
					</TouchableOpacity>
					<PressedText
						isSmall
						buttonStyles={styles.touch}
						onPress={termsOpenHandler}
						texts={[texts.signUp.termsCondition1, texts.signUp.termsCondition2]}
					/>
				</View>
				<Button buttonStyle={styles.button} onPress={buttonHandlerPress} text={texts.signUp.header} />
				<PressedText
					buttonStyles={styles.bottomTouch}
					onPress={() => navigation.goBack()}
					texts={[texts.signUp.signIn1, texts.signUp.signIn2]}
				/>
			</ScrollView>
		</KeyboardStaticAvoid>
	);
});
