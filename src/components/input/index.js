// @flow

import React, { useRef, useState, useEffect } from 'react';
import { TextInput, Text, View, TouchableOpacity, Modal } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import { Icon } from '../../components';
import styles from './styles';
import { colors } from '../../constants';

type IProps = {
	value: string,
	onChange: (x: string) => void,
	placeholder: string,
	multiline?: boolean,
	secureTextEntry: boolean,
	name: string,
	keyboardType: string,
	camera: boolean,
	cameraCallback: () => void,
};

export const Input = (props: IProps): React.Node => {
	const inputRef = useRef<TextInput>(TextInput);
	const {
		value,
		onChange,
		placeholder,
		multiline,
		name,
		keyboardType = 'default',
		secureTextEntry = false,
		isCountryCode = false,
		camera = false,
		cameraCallback,
		// ...params
	} = props;
	// const [value, onChange] = useState('');
	const [isSecurity, setSecurity] = useState(secureTextEntry);
	const [isModalVisible, setModalVisible] = useState(false);

	const handleChange = v => onChange(v);

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.header}>{name}</Text>
			<View style={styles.container}>
				{!isCountryCode ? (
					<TextInput
						ref={inputRef}
						style={styles.input}
						value={value}
						onChangeText={handleChange}
						placeholder={placeholder}
						placeholderTextColor={colors.gray}
						secureTextEntry={isSecurity}
						multiline={multiline}
						underlineColorAndroid="transparent"
						selectionColor={colors.dark}
						keyboardType={keyboardType}
						// fromRight={!!currency}
						// {...params}
					/>
				) : (
					<>
						<PhoneInput
							onChangePhoneNumber={handleChange}
							value={value}
							style={styles.input}
							textStyle={styles.input}
							placeholder={placeholder}
							placeholderTextColor={colors.gray}
							secureTextEntry={isSecurity}
							multiline={multiline}
							underlineColorAndroid="transparent"
							selectionColor={colors.dark}
							keyboardType={keyboardType}
						/>
						<CountryPicker
							visible={isModalVisible}
							renderFlagButton={() => (
								<TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalButton} />
							)}
							onClose={() => setModalVisible(false)}
							withCallingCode
							withAlphaFilter
							onSelect={c => handleChange(`+${c.callingCode[0]}`)}
						></CountryPicker>
					</>
				)}
				{secureTextEntry && (
					<TouchableOpacity style={styles.touchSecurity} onPress={() => setSecurity(!isSecurity)}>
						<Icon
							style={styles.icon}
							icon={isSecurity ? Icon.icons.eyeOpen : Icon.icons.eyeClose}
							calculatedHeight={18}
							calculatedWidth={34}
						/>
					</TouchableOpacity>
				)}
				{camera && (
					<TouchableOpacity style={styles.touchSecurity} onPress={cameraCallback}>
						<Icon style={{}} icon={Icon.icons.camera} calculatedHeight={23} calculatedWidth={23} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};
