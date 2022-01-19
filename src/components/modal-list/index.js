// @flow
import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { _ } from 'lodash';
import { Icon } from '../icons';
import styles from './styles';

type ModalProps = {
	callback: () => void,
	isSave: boolean,
};

type ModalState = {};

export const ListModal = () => {
	state = {
		isModalActive: false,
	};

	return (
		<Modal
			animationType="fade"
			transparent
			style={styles.container}
			visible={isModalActive}
			onRequestClose={() => {
				console.log('Modal has been closed.');
			}}
		>
			<View style={styles.transparentHeader}>
				<TouchableOpacity onPress={() => this.setState({ isModalActive: false })} style={styles.closePress}>
					{/* <Icon style={{}} icon={Icon.icons.} calculatedHeight={23} calculatedWidth={23} /> */}
					<Text style={styles.closeIcon}>{'\uE832'}</Text>
				</TouchableOpacity>
				<View style={styles.contentContainer}>
					<View style={styles.searchContentContainer}>
						<Search value={search} onChangeText={onSearchInput} />
						<Text style={styles.headerText}>SELECT CONTACT</Text>
					</View>
					<View style={styles.bottomContentContainer}>
						{/* <FlatList
                keyExtractor={item => JSON.stringify(item)}
                extraData={checkedNumber}
                showsVerticalScrollIndicator={false}
                data={phoneContacts}
                style={styles.listContainer}
                contentContainerStyle={{
                  ...appStyles.contentContainer,
                  ...appStyles.smallHorizontalPadding
                }}
                renderItem={renderContent}
              /> */}
					</View>
				</View>
			</View>
		</Modal>
	);
};
