// @flow
import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Storage } from '../../../utils/storage';
import { texts, LOGIN_SCREEN, SECURITY_CODE_SCREEN, OVERVIEW_TAB, ACCOUNT_VERIFICATION } from '../../../constants';
import { LOGO } from '../../../assets/images';
import { changeForgotStatus } from '../../../store/actions';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { CustomKeyboard } from '../../../components';
import styles from '../security-code/styles';

type SecurityCodeScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
	changeStatus: () => void,
};

const mapDispatchToProps = {
	changeStatus: changeForgotStatus,
};
const mapStateToProps = state => ({
	isForgot: state.auth.loginReducer.isForgot,
});

export const SetSecurityCode = compose(connect(mapStateToProps, mapDispatchToProps))(
	({ navigation, changeStatus, isForgot }: SecurityCodeScreenProps) => {
		const { phone, password } = navigation.state.params;
		const [pin, setPin] = useState('');
		async function setBiometric() {
			await Storage.set({ key: 'biometric', value: JSON.stringify({ biometric: true }) });
			if (isForgot) {
				changeStatus({ isForgot: false });
				navigation.navigate(OVERVIEW_TAB);
				return;
			}
			navigation.navigate(ACCOUNT_VERIFICATION);
		}

		async function pinEnterHandler(value: string) {
			if (pin.length === 4) {
				if (pin === value) {
					await Storage.set({ key: 'isPinEnabled', value });
					await Storage.set({ key: 'mainScreen', value: SECURITY_CODE_SCREEN });
					await Storage.set({ key: 'cred', value: JSON.stringify({ phone, password }) });
					Alert.alert(
						'Do you want to allow AppName\nto use Touch ID?',
						'',
						[
							{
								text: 'Don’t allow',
								onPress: () => navigation.navigate(ACCOUNT_VERIFICATION),
								style: 'cancel',
							},
							{
								text: 'OK',
								onPress: () => setBiometric(),
							},
						],
						{ cancelable: false },
					);
				} else {
					Alert.alert('Error', 'Sorry passwords is different.\nPlease try again.');
					setPin('');
				}
			} else {
				setPin(value);
			}
		}
		function redirectTo(text) {
			if (text === texts.securityCode.skip) {
				navigation.navigate(LOGIN_SCREEN);
			}
		}
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>
					{pin.length === 4 ? texts.setSecurityCode.header2 : texts.setSecurityCode.header1}
				</Text>
				<CustomKeyboard
					isConfirm={pin.length === 4}
					type="setType"
					buttonHandler={redirectTo}
					callBack={pinEnterHandler}
				/>
			</View>
		);
	},
);
