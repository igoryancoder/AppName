// @flow
import React, { useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { ButtonComponent } from '../../../components';
import { texts, SECURITY_CODE_SCREEN, SET_SECURITY_CODE_SCREEN } from '../../../constants';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import styles from './styles';

// import Geolocation from '@react-native-community/geolocation';

type OverViewScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
	credentials: any,
	isForgot: boolean,
};

const mapDispatchToProps = {};
const mapStateToProps = state => ({
	credentials: state.auth.loginReducer.credentials,
	isForgot: state.auth.loginReducer.isForgot,
});


export const OverView = compose(connect(mapStateToProps, mapDispatchToProps))(
	({ navigation, credentials, isForgot }: OverViewScreenProps) => {
		function redirectTo(rout) {
			Alert.alert('Message', 'in progress');
		}
		function renderButtons() {
			return texts.overView.buttons.map((val, key) => <ButtonComponent key={key} callBack={redirectTo} data={val} />);
		}
		return (
			<View style={styles.container}>
				<Text style={styles.heder}>{texts.overView.header}</Text>
				<Text style={styles.balance}>$111,200</Text>
				<Text style={styles.text1}>
					{texts.overView.interests} <Text style={styles.sum}>3,600 </Text>
					<Text style={styles.text2}>{texts.overView.lastWeek}</Text>
				</Text>
				<View style={styles.buttonsContainer}>{renderButtons()}</View>
			</View>
		);
	},
);
