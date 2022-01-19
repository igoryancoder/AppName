// @flow
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, Icon } from '../../../components';
import { texts, SECURITY_CODE_SCREEN, UPLOAD_DOCUMENT } from '../../../constants';
import { LOGO } from '../../../assets/images';
import styles from './styles';

type AccountVerificationScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const AccountVerification = compose(connect(null, mapDispatchToProps))(
	({ navigation }: AccountVerificationScreenProps) => {
		function buttonHandlerPress() {
			navigation.navigate(UPLOAD_DOCUMENT);
		}

		return (
			<View style={styles.container}>
				{/* <Image style={styles.image} source={LOGO} /> */}
				<Icon style={{}} icon={Icon.icons.verification} calculatedHeight={88} calculatedWidth={88} />
				<Text style={styles.headerText}>{texts.accountVerification.header}</Text>
				<Button buttonStyle={styles.button} onPress={buttonHandlerPress} text={texts.accountVerification.confirm} />
				<TouchableOpacity onPress={() => navigation.navigate(SECURITY_CODE_SCREEN)} style={styles.skipBtn}>
					<Text style={styles.text}>{texts.accountVerification.cancel}</Text>
				</TouchableOpacity>
			</View>
		);
	},
);
