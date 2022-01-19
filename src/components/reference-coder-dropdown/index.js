// @flow
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from '../icons';
import Accordion from 'react-native-collapsible/Accordion';
import { texts, colors } from '../../constants';
// import DropDownItem from 'react-native-drop-down-item';
import styles from './styles';

type CodeDropDownScreenProps = {
	callback: () => void,
};

export const CodeDropDown = ({ callback }: CodeDropDownScreenProps) => {
	const [isDropdownActive, seActive] = useState([]);
	return (
		<Accordion
			touchableComponent={TouchableOpacity}
			activeSections={isDropdownActive}
			sections={[0]}
			renderHeader={(section, index, isActive) => {
				return (
					<View style={[styles.container, !isActive && styles.notActiveContainer]}>
						<Text style={[styles.header, !isActive && styles.notActiveHeader]}>{texts.signUp.dropdownHeader}</Text>
						<Icon style={{}} icon={Icon.icons.back} calculatedHeight={20} calculatedWidth={11} />
					</View>
				);
			}}
			renderContent={() => (
				<View style={styles.contentContainer}>
					<Text style={styles.info}>{texts.signUp.dropdownInfo[0]}</Text>
					<Text style={styles.info}>{texts.signUp.dropdownInfo[1]}</Text>
					<Text style={styles.info}>{texts.signUp.dropdownInfo[2]}</Text>
					<TextInput
						onChangeText={callback}
						placeholderTextColor={colors.gray}
						underlineColorAndroid="transparent"
						selectionColor={colors.dark}
						placeholder={texts.signUp.referenceCodePlaceholder}
						style={styles.refCodeInput}
					/>
				</View>
			)}
			onChange={() => seActive([0])}
		/>
	);
};
