// @flow
import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, WalletComponent } from '../../../../components';
import { texts, WALLETS_ADD, coins } from '../../../../constants';
import { WALLET } from '../../../../assets/images';
import styles from './styles';

type WalletsMainScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapStateToProps = state => ({
	wallets: state.auth.walletsReducer.wallets,
});

const mapDispatchToProps = {};

export const WalletsMain = compose(connect(mapStateToProps, mapDispatchToProps))(
	({ navigation, wallets }: WalletsMainScreenProps) => {
		renderNoWallets = () => (
			<View style={styles.centerContainer}>
				<Image style={styles.image} source={WALLET} />
				<Text style={styles.info}>{texts.wallet.main.info}</Text>
			</View>
		);
		console.log('wallets', wallets);
		renderWallets = () => (
			<View style={{ position: 'absolute', top: 115, width: '100%' }}>
				<FlatList
					alwaysBounceVertical={false}
					showsVerticalScrollIndicator={false}
					style={styles.transactionsContainer}
					contentContainerStyle={styles.transactionsContentContainer}
					keyExtractor={item => JSON.stringify(item)}
					data={wallets}
					renderItem={({ item, index }) => <WalletComponent key={index} wallet={item} nav={navigation.navigate} />}
				/>
			</View>
		);
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>{texts.wallet.main.header}</Text>
				{!wallets ? renderNoWallets() : renderWallets()}
				<Button
					buttonStyle={styles.button}
					onPress={() => navigation.navigate(WALLETS_ADD)}
					text={texts.wallet.main.add}
				/>
			</View>
		);
	},
);
