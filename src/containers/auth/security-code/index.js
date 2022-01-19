// @flow
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, Platform } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import TouchID from 'react-native-touch-id';
import { Storage } from '../../../utils/storage';
import { texts, LOGIN_SCREEN, OVERVIEW_TAB, colors, BIOMETRIC_ERRORS } from '../../../constants';
import { LOGO } from '../../../assets/images';
import { CustomKeyboard } from '../../../components';
import { loginActionRequest, changeForgotStatus } from '../../../store/actions';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import styles from './styles';

type SecurityCodeScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
	login: () => void,
};

const mapDispatchToProps = {
	login: loginActionRequest,
	changeStatus: changeForgotStatus,
};

export const SecurityCode = compose(connect(null, mapDispatchToProps))(
	({ navigation, login, changeStatus }: SecurityCodeScreenProps) => {
		const [pin, setPin] = useState('');
		const [credentials, setCred] = useState(null);
		const [isBiometric, setBiometric] = useState(null);
		const [type, setType] = useState(null);
		useEffect(() => {
			Promise.all([
				Storage.get({ key: 'isPinEnabled' }).catch(() => null),
				Storage.get({ key: 'cred' }).catch(() => null),
				Storage.get({ key: 'biometric' }).catch(() => null),
				Storage.get({ key: 'protectionType' }).catch(() => null),
			]).then(([pinNum, cred, biometric, protectionType]) => {
				setPin(pinNum);
				setCred(JSON.parse(cred));
				const bio = biometric !== null ? JSON.parse(biometric).biometric : biometric;
				setBiometric(bio);
				const bioType = protectionType !== null ? JSON.parse(protectionType).type : protectionType;
				setType(bioType);
			});
		}, []);

		function pinEnterHandler(value: string) {
			console.log('isBiometric.biometric', isBiometric, 'value = ', value, 'pin', pin, 'credentials', credentials);
			if (pin === value) {
				login(credentials);
			} else {
				Alert.alert('Error', 'Wrong pin, please try again');
			}
		}
		function redirectTo(text) {
			if (text === 'Forgot?') {
				Alert.alert(
					'Reset a security code',
					'You will have to sign in again in order\nto reset a security code. Are you sure?',
					[
						{
							text: 'Cancel',
							onPress: () => console.log('Cancel Pressed'),
							style: 'cancel',
						},
						{
							text: 'OK',
							onPress: () => {
								Storage.set({ key: 'isPinEnabled', value: 'false' });
								Storage.set({ key: 'mainScreen', value: LOGIN_SCREEN });
								changeStatus({ isForgot: true });
								navigation.navigate(LOGIN_SCREEN);
							},
						},
					],
					{ cancelable: false },
				);
			} else if (text === 'touch') {
				const optionalConfigObject = {
					fallbackLabel: '',
					color: colors.primary,
				};
				TouchID.authenticate(`Please use ${type} to login to AppName`, optionalConfigObject)
					.then(() => {
						login(credentials);
					})
					.catch(err => {
						const { name, code } = err || {};
						const errorKey = Platform.OS === 'ios' ? name : code || name;

						if (errorKey in BIOMETRIC_ERRORS) {
							Alert.alert('Error', BIOMETRIC_ERRORS[errorKey]);
						}
					});
			}
		}
		return (
			<View style={styles.container}>
				<Image style={styles.image} source={LOGO} />
				<Text style={styles.headerText}>{texts.securityCode.header}</Text>
				<CustomKeyboard type="verificationType" buttonHandler={redirectTo} callBack={pinEnterHandler} />
			</View>
		);
	},
);
