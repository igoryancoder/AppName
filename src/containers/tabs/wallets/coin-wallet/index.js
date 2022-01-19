// @flow
import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, Icon, CoinComponent } from '../../../../components';
import { texts, REFILL, WITHDRAW } from '../../../../constants';
import styles from './styles';

type CoinWalletScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const CoinWallet = compose(connect(null, mapDispatchToProps))(({ navigation }: CoinWalletScreenProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Bitcoin {texts.wallet.main.header}</Text>
			<View style={styles.coinContainer}>
				<View style={styles.nameContainer}>
					<Icon style={{}} icon={Icon.icons.bitcoin} calculatedHeight={23} calculatedWidth={23} />
					<Text style={styles.name}>Bitcoin</Text>
				</View>
				<View style={styles.balanceContainer}>
					<Text style={styles.balance}>Balance</Text>
					<Text style={styles.monyText}>0.00000005 BTC</Text>
				</View>
				<Text style={styles.dollars}>$2,666</Text>
				<Button
					buttonStyle={styles.buttonUp}
					onPress={() => navigation.navigate(REFILL)}
					text={texts.wallet.withdraw.refillWallet}
				/>
				<Button
					buttonStyle={styles.button}
					isWhite
					onPress={() => navigation.navigate(WITHDRAW)}
					text={texts.wallet.withdraw.withdrawCoins}
				/>
			</View>
		</View>
	);
});
