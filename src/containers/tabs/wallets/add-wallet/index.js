// @flow
import React, { useRef, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { walletRequest } from '../../../../store/actions';
import { Button, CoinButton, CoinModal } from '../../../../components';
import { texts } from '../../../../constants';
import styles from './styles';
import { WalletsQRModal } from '../qr';

type WalletsAddScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapStateToProps = state => ({
	currencyArray: state.auth.walletsReducer.currencyArray,
});

const mapDispatchToProps = {
	walletAdd: walletRequest,
};

export const WalletsAdd = compose(connect(mapStateToProps, mapDispatchToProps))(
	({ navigation, currencyArray, walletAdd }: WalletsAddScreenProps) => {
		const modalRef = useRef<WalletsQRModal>(WalletsQRModal);
		const coinModalRef = useRef<CoinModal>(CoinModal);
		const [activeCoin, pushCoin] = useState(null);

		function addCoin(coin: any) {
			pushCoin(coin);
		}

		function renderCoins() {
			return (
				<CoinButton
					buttonHeader={texts.wallet.add.coinDefaultHeader}
					buttonStyle={styles.buttonCoin}
					onPress={() => alert('in progress', activeCoin)}
					val={activeCoin}
				/>
			);
		}

		function addWallet() {
			if (!!activeCoin) {
				const { id } = activeCoin;
				walletAdd({ currency: id });
				modalRef.current.openModal();
			}
		}

		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>{texts.wallet.add.header}</Text>
				<CoinButton
					buttonHeader={texts.wallet.add.coinDefaultHeader}
					buttonStyle={styles.buttonCoin}
					onPress={() => coinModalRef.current.openModal()}
					val={{ name: texts.wallet.add.coinDefault, icon: null }}
				/>
				{activeCoin && renderCoins()}
				<WalletsQRModal ref={modalRef} />
				<CoinModal ref={coinModalRef} data={currencyArray} callback={addCoin} />
				<Button buttonStyle={styles.button} onPress={addWallet} text={texts.wallet.main.add} />
			</View>
		);
	},
);
