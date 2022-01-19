// @flow
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button } from '../../../components';
import { texts, LOGIN_SCREEN } from '../../../constants';
import { LOGO, UPLOAD } from '../../../assets/images';
import styles from './styles';

type UploadDocumentScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const UploadDocument = compose(connect(null, mapDispatchToProps))(
	({ navigation }: AccountVerificationScreenProps) => {
		// const { phone, password } = navigation.state.params;
		function buttonHandlerPress() {
			Alert.alert('Alert', 'In Progress');
		}

		return (
			<View style={styles.container}>
				{/* <Image style={styles.image} source={LOGO} /> */}
				<Text style={styles.documentViewText}>{texts.accountVerification.document}</Text>
				<View style={styles.documentUploadContainer}>
					<Image style={styles.uploadImage} source={UPLOAD} />
					<Text>{texts.accountVerification.documentUpload}</Text>
				</View>
				<Button buttonStyle={styles.button} onPress={buttonHandlerPress} text={texts.accountVerification.send} />
				<TouchableOpacity
					onPress={() => navigation.navigate({ routeName: LOGIN_SCREEN, params: { phone, password } })}
					style={styles.skipBtn}
				>
					<Text style={styles.text}>{texts.accountVerification.cancel}</Text>
				</TouchableOpacity>
			</View>
		);
	},
);
