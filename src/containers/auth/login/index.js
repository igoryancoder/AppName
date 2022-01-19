// @flow
import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button, Input, KeyboardStaticAvoid, PressedText } from '../../../components';
import { texts, SIGN_UP_SCREEN, FORGOT_PASSWORD_SCREEN, OVERVIEW_TAB } from '../../../constants';
import { validationFunc } from '../../../utils/validations';
import { SIGN_IN } from '../../../assets/images';
import styles from './styles';
import { loginActionRequest } from '../../../store/actions';
import { compose } from 'recompose';
import { connect } from 'react-redux';

type LoginScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
	login: () => void,
};

const mapDispatchToProps = {
	login: loginActionRequest,
};
const mapStateToProps = state => ({
	isForgot: state.auth.loginReducer.isForgot,
});

export const Login = compose(connect(mapStateToProps, mapDispatchToProps))(({ navigation, login, isForgot }: LoginScreenProps) => {
	const [phone, onNumberChange] = useState('');
	const [password, onPasswordChange] = useState('');
	function buttonHandlerPress() {
		if (validationFunc([phone, password])) {
			login({ phone, password, isForgot });
		}
	}

	return (
		<KeyboardStaticAvoid fullheight contentContainerStyle={styles.container}>
			<Image style={styles.image} source={SIGN_IN} />
			<Text style={styles.headerText}>{texts.signIn.header}</Text>
			<Input
				value={phone}
				onChange={onNumberChange}
				name={texts.signIn.number}
				placeholder={texts.signIn.numberEnter}
				keyboardType="phone-pad"
			/>
			<Input
				value={password}
				onChange={onPasswordChange}
				secureTextEntry
				name={texts.signIn.password}
				placeholder={texts.signIn.passEnter}
			/>
			<TouchableOpacity style={styles.touchForgotPass} onPress={() => navigation.navigate(FORGOT_PASSWORD_SCREEN)}>
				<Text style={styles.forgotPassText}>{texts.signIn.forgotPassword}</Text>
			</TouchableOpacity>
			<Button onPress={buttonHandlerPress} text={texts.signIn.header} />
			<PressedText
				buttonStyles={styles.touch}
				onPress={() => navigation.navigate(SIGN_UP_SCREEN)}
				texts={[texts.signIn.signUp1, texts.signIn.signUp2]}
			/>
		</KeyboardStaticAvoid>
	);
});
