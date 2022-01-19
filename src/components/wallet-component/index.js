// @flow
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from '..';
import { COIN_WALLET, coins } from '../../constants';
import styles from './styles';

type WalletComponentProps = {
	wallet: any,
};

export const WalletComponent = ({ wallet, nav }: WalletComponentProps) => {
	return (
		<TouchableOpacity onPress={() => nav(COIN_WALLET, { wallet })} style={styles.container}>
			<View style={[styles.upContainer, wallet.frozenBalance > 0 ? styles.frozenStyles : styles.noFrozen]}>
				<View style={styles.nameContainer}>
					<Icon style={{}} icon={coins[wallet.currency].icon} calculatedHeight={23} calculatedWidth={23} />
					<Text style={styles.name}>{coins[wallet.currency].name}</Text>
				</View>
				<Text style={styles.monyText}>
					{wallet.balance} {coins[wallet.currency].smallName}
				</Text>
			</View>
			<Text style={styles.dollars}>$2,666</Text>
		</TouchableOpacity>
	);
};
