// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { texts, SUCCESS_TRANSACTION } from '../../../../constants';
import styles from '../qr/styles';

type TransactionConfirmScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const TransactionConfirm = compose(connect(null, mapDispatchToProps))(
	({ navigation }: TransactionConfirmScreenProps) => {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>{texts.wallet.withdraw.header}</Text>
				<Text style={styles.header}>{texts.wallet.withdraw.from}</Text>
				<View style={styles.nameContainer}>
					<Icon style={{}} icon={Icon.icons.bitcoin} calculatedHeight={23} calculatedWidth={23} />
					<Text style={styles.text}>Bitcoin Wallet</Text>
				</View>
				<Text style={styles.header}>{texts.wallet.withdraw.to}</Text>
				<View style={styles.nameContainer}>
					<Text numberOfLines={1} style={styles.text2}>
						bc1qresxes6yeljwtruzh79cfa26gkmqdmd9t3kvya
					</Text>
				</View>
				<Text style={styles.header}>{texts.wallet.withdraw.amount}</Text>
				<View style={styles.nameContainer}>
					<Text style={styles.amountText}>
						0.00000090 <Text style={styles.amountName}>BTC</Text>
					</Text>
					<View style={styles.line} />
					<Text style={styles.fait2}>$ 444</Text>
				</View>
				<Button
					buttonStyle={styles.buttonBottom}
					onPress={() => navigation.navigate(SUCCESS_TRANSACTION)}
					text={texts.wallet.withdraw.confirm}
				/>
			</View>
		);
	},
);
