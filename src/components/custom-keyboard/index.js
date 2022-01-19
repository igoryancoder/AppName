import React, { useState, forwardRef, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { texts, colors } from '../../constants';
import styles from './styles';
const keyboardTypeArray = {
	verificationType: ['1', '2', '3', '4', '5', '6', '7', '8', '9', texts.securityCode.forgot, '0', 'touch'],
	setType: ['1', '2', '3', '4', '5', '6', '7', '8', '9', texts.securityCode.skip, '0', 'del'],
};

type IProps = {
	callBack: (val: string) => void,
	buttonHandler: () => void,
	type: string,
	isConfirm: boolean,
};

export const CustomKeyboard = (props: IProps): React.Node => {
	const { callBack, buttonHandler, type, isConfirm } = props;
	const [pin, setPin] = useState('');

	useEffect(() => {
		if (pin.length === 4) {
			callBack(pin);
			setPin('');
		}
	});

	function pressHandler(number: string) {
		if (number === 'touch' || number === texts.securityCode.forgot) {
			buttonHandler(number);
		} else if (number === 'del') {
			const delString = pin.substring(0, pin.length - 1);
			setPin(delString);
		} else if (typeof +number === 'number') {
			const result = pin + number;
			if (result.length > 4) {
				return;
			} else {
				setPin(result);
			}
		}
	}

	function renderKey() {
		return keyboardTypeArray[type].map((val, key) => {
			if (val === '' || (key === 9 && isConfirm)) {
				return <View key={key} style={styles.buttonStyle} />;
			}
			if (key === 9) {
				return (
					<TouchableOpacity key={key} onPress={() => buttonHandler(val)} style={styles.buttonStyle}>
						<Text style={styles.textStyle}>{val}</Text>
					</TouchableOpacity>
				);
			}
			return (
				<TouchableOpacity key={key} onPress={() => pressHandler(val)} style={styles.buttonStyle}>
					{val === 'touch' || val === 'del' ? (
						<Text style={val === 'touch' ? styles.button : styles.delete}>{val === 'touch' ? '\uE829' : '\uE850'}</Text>
					) : (
						<Text style={styles.labelStyle}>{val}</Text>
					)}
				</TouchableOpacity>
			);
		});
	}

	function renderNumbersField() {
		return [0, 1, 2, 3].map((val, key) => {
			return (
				<View
					key={key}
					style={[styles.field, { backgroundColor: key + 1 <= pin.length ? colors.primary : colors.notActiveGray }]}
				/>
			);
		});
	}

	return (
		<View style={styles.container}>
			<View style={styles.fieldContainer}>{renderNumbersField()}</View>
			<View style={styles.wrapperStyle}>{renderKey()}</View>
		</View>
	);
};
