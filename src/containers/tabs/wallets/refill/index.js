// @flow
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Text, View, Clipboard } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, Input, CloseIcon, TrashIcon } from '../../../../components';
import { texts } from '../../../../constants';
import styles from '../qr/styles';

type RefillScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const Refill = compose(connect(null, mapDispatchToProps))(({ navigation }: RefillScreenProps) => {
	const [address, setAddress] = useState('bc1qresr_MOCKED_DATA_h79cfa26gkmqdmd9t3kvya');

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{texts.wallet.refill.header}</Text>
			<Input value={address} onChange={setAddress} name={texts.wallet.main.address} keyboardType="default" />
			<Button
				buttonStyle={styles.buttonUp}
				onPress={() => Clipboard.setString(address)}
				text={texts.wallet.main.copy}
			/>
			<Button buttonStyle={styles.button} isWhite onPress={() => {}} text={texts.wallet.main.share} />
			<QRCode size={280} value={address} />
		</View>
	);
});
