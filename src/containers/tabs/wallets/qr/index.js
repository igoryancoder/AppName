// @flow
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Text, View, Clipboard, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Button, Input, CloseIcon, TrashIcon } from '../../../../components';
import { texts, WALLETS_ADD } from '../../../../constants';
import styles from './styles';

const WalletsQR = (props, ref) => {
	const [address, setAddress] = useState('bc1qresr_MOCKED_DATA_h79cfa26gkmqdmd9t3kvya');
	const [isModalActive, setActive] = useState(false);

	function openModal() {
		setActive(true);
	}

	useImperativeHandle(
		ref,
		() => ({
			openModal,
		}),
		[],
	);

	return (
		<Modal
			animationType="slide"
			transparent
			style={styles.container}
			visible={isModalActive}
			onRequestClose={() => {
				console.log('Modal has been closed.'); // NOSONAR
			}}
		>
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<CloseIcon onPress={() => setActive(false)} />
					<TrashIcon />
				</View>
				<Input value={address} onChange={setAddress} name={texts.wallet.main.address} keyboardType="default" />
				<Button
					buttonStyle={styles.buttonUp}
					onPress={() => Clipboard.setString(address)}
					text={texts.wallet.main.copy}
				/>
				<Button buttonStyle={styles.button} isWhite onPress={() => setActive(false)} text={texts.wallet.main.cancel} />
				<QRCode size={280} value={address} />
			</View>
		</Modal>
	);
};

export const WalletsQRModal = forwardRef(WalletsQR);
