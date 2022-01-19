// @flow
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
// import { searchByFieldNames } from '@helpers';
import { coins } from '../../constants/globals';
import { Search, CoinItem } from '../';
import styles from './styles';
import { texts } from '../../constants';

const CoinList = ({ callback, data }: props, ref) => {
	const [search, setSearch] = useState('');
	const [isModalActive, setActive] = useState(false);
	const [coin, setCoin] = useState({ id: null });
	const [coinsModal, setCoins] = useState(data);

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

	function onSearchInput(text: string) {
		setSearch(text);
		const filtered =
			text.length === 0
				? data
				: coinsModal.filter(id => {
						const regex = new RegExp(text.toLowerCase(), 'ig');
						if (coins[id].name.toLowerCase().search(regex) > -1) {
							return id;
						}
				  });
		setCoins(filtered);
	}

	function choose() {
		setActive(false);
		callback(coin);
	}

	function renderContent({ item }) {
		return (
			<CoinItem
				isActive={coin.id === item}
				key={JSON.stringify(item)}
				item={coins[item]}
				callback={() => setCoin(coins[item])}
			/>
		);
	}

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
				<View style={styles.contentContainer}>
					<TouchableWithoutFeedback style={styles.close} onPress={() => setActive(false)}>
						<View style={styles.line} />
					</TouchableWithoutFeedback>
					<View style={styles.searchContentContainer}>
						<Search value={search} onChangeText={onSearchInput} />
					</View>
					<View style={styles.listContainer}>
						<FlatList
							keyExtractor={item => JSON.stringify(item)}
							// extraData={checkedNumber}
							showsVerticalScrollIndicator={false}
							data={coinsModal}
							style={[styles.listContainer]}
							contentContainerStyle={styles.paddingScroll}
							renderItem={renderContent}
						/>
					</View>
				</View>
				<TouchableOpacity activeOpacity={0.99} style={styles.closeButton} onPress={choose}>
					<Text style={styles.btnText}>{texts.wallet.modal.choose}</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

export const CoinModal = forwardRef(CoinList);
