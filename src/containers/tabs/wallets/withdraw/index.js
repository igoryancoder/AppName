// @flow
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Text, View, Clipboard, TouchableOpacity, Platform } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { QRreader } from 'react-native-qr-scanner';
import { Button, Input, Icon } from '../../../../components';
import { texts, colors, TRANSACTION_CONFIRM } from '../../../../constants';
import styles from '../qr/styles';

type WithdrawScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const Withdraw = compose(connect(null, mapDispatchToProps))(({ navigation }: WithdrawScreenProps) => {
	const [amount, setAmount] = useState('');
	const [walletTo, setWalletTo] = useState('');
	const [isConfirm, setConfirm] = useState(false);

	function toConfirm() {
		navigation.navigate(TRANSACTION_CONFIRM);
	}

	function pickerFunc(response) {
		if (response.didCancel) {
			console.log('ImagePicker didCancel'); // NOSONAR
		} else if (response.error) {
			console.log(response.error);
		} else {
			const source = Platform.OS === 'ios' ? response.uri.substring(7) : response.path;
			QRreader(source)
				.then(data => {
					console.log(data);
				})
				.catch(err => {
					if (typeof err === 'object') {
						// warningAlert('Invalid QR code.\nPlease provide valid QR code for FCMB');
					} else {
						// warningAlert(err);
					}
				});
		}
	}

	function qrCameraRead(e) {
		console.log('E', e);
		// openCameraHandler(false);
	}

	function selectFromGallery() {
		ImagePicker.showImagePicker({}, pickerFunc);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{texts.wallet.withdraw.header}</Text>
			<Text style={styles.header}>{texts.wallet.withdraw.from}</Text>
			<View style={styles.coinNameContainer}>
				<Icon style={{}} icon={Icon.icons.bitcoin} calculatedHeight={23} calculatedWidth={23} />
				<Text style={styles.text}>Bitcoin Wallet</Text>
			</View>
			<Input
				value={walletTo}
				onChange={setWalletTo}
				camera
				cameraCallback={selectFromGallery}
				name={texts.wallet.withdraw.to}
				placeholder={texts.wallet.withdraw.enterWallet}
				keyboardType="default"
			/>
			<Input
				value={amount}
				onChange={setAmount}
				style={styles.amount}
				name={texts.wallet.withdraw.amount}
				placeholder={texts.wallet.withdraw.enterAmount}
				keyboardType="numeric"
			/>
			<View style={styles.faitContainer}>
				<Text style={styles.header}>{texts.wallet.withdraw.fait}</Text>
				<Text style={styles.fait}>$ 444</Text>
			</View>
			<View style={styles.btnContainer}>
				<TouchableOpacity style={styles.confirmWrapper} onPress={() => setConfirm(!isConfirm)}>
					<Text style={[styles.checkbox, { color: isConfirm ? colors.primary : colors.gray }]}>
						{isConfirm ? '\uE81C' : '\uE81D'}
					</Text>
				</TouchableOpacity>
				<Text style={styles.checkboxText}>{texts.wallet.withdraw.withdrawCoin}</Text>
			</View>
			<QRCodeScanner cameraStyle={styles.cameraView} onRead={qrCameraRead} showMarker fadeIn />
			<Button buttonStyle={styles.buttonBottom} onPress={toConfirm} text={texts.wallet.withdraw.withdrawCoins} />
		</View>
	);
});
