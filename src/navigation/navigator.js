// @flow
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { tabBarVisibility } from '../constants';

import {
	Welcome,
	SecurityCode,
	Login,
	SignUp,
	ForgotPassword,
	Verification,
	SetSecurityCode,
	OverView,
	WalletsMain,
	WalletsAdd,
	Analytics,
	Settings,
	EmptyNavView,
	AccountVerification,
	VerificationConfirm,
	UploadDocument,
	CoinWallet,
	Refill,
	Withdraw,
	TransactionConfirm,
	Success,
} from '../containers';
import { BackIcon, TabBarIcon, HeaderComponent, InfoIcon, CloseIcon, TrashIcon } from '../components';
import {
	WELCOME_SCREEN,
	SECURITY_CODE_SCREEN,
	LOGIN_SCREEN,
	FORGOT_PASSWORD_SCREEN,
	VERIFICATION_CODE_SCREEN,
	SET_SECURITY_CODE_SCREEN,
	SIGN_UP_SCREEN,
	OVERVIEW_SCREEN,
	AUTH_NAV,
	EMPTY_NAV_VIEW,
	OVERVIEW_NAV,
	OVERVIEW_TAB,
	WALLETS_TAB,
	WALLETS_ADD,
	ANALYTICS_TAB,
	SETTINGS_TAB,
	VERIFICATION_CONFIRM,
	ACCOUNT_VERIFICATION,
	UPLOAD_DOCUMENT,
	WALLETS_SCREEN,
	COIN_WALLET,
	REFILL,
	WITHDRAW,
	TRANSACTION_CONFIRM,
	SUCCESS_TRANSACTION,
	colors,
} from '../constants';
import { LOGO } from '../assets/images';

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 25,
	},
});

type TabBarIconArgs = {
	focused: boolean,
};

const hiddenTabBarRoutes = [
	WALLETS_ADD,
	COIN_WALLET,
	COIN_WALLET,
	REFILL,
	WITHDRAW,
	SUCCESS_TRANSACTION,
	TRANSACTION_CONFIRM,
];

const AuthNavigator = createStackNavigator(
	{
		[EMPTY_NAV_VIEW]: {
			screen: EmptyNavView,
			navigationOptions: {
				header: null,
			},
		},
		[WELCOME_SCREEN]: {
			screen: Welcome,
			navigationOptions: {
				header: null,
				gesturesEnabled: false,
				animationEnabled: false,
			},
		},
		[SECURITY_CODE_SCREEN]: {
			screen: SecurityCode,
			navigationOptions: {
				header: null,
				animationEnabled: false,
				gesturesEnabled: false,
			},
		},
		[LOGIN_SCREEN]: {
			screen: Login,
			navigationOptions: {
				header: null,
				gesturesEnabled: false,
				animationEnabled: false,
			},
		},
		[SIGN_UP_SCREEN]: {
			screen: SignUp,
			navigationOptions: {
				headerTitle: () => <Image style={styles.image} source={LOGO} />,
				headerLeft: () => <BackIcon />,
			},
		},
		[FORGOT_PASSWORD_SCREEN]: {
			screen: ForgotPassword,
			navigationOptions: {
				headerTitle: '',
				headerLeft: () => <BackIcon />,
			},
		},
		[VERIFICATION_CODE_SCREEN]: {
			screen: Verification,
			navigationOptions: {
				headerTitle: '',
				headerLeft: () => <BackIcon />,
			},
		},
		[SET_SECURITY_CODE_SCREEN]: {
			screen: SetSecurityCode,
			navigationOptions: {
				headerLeft: null,
				headerTitle: () => <Image style={styles.image} source={LOGO} />,
			},
		},
		[ACCOUNT_VERIFICATION]: {
			screen: AccountVerification,
			navigationOptions: {
				headerTitle: () => <Image style={styles.image} source={LOGO} />,
			},
		},
		[VERIFICATION_CONFIRM]: {
			screen: VerificationConfirm,
			navigationOptions: {
				header: null,
			},
		},
		[UPLOAD_DOCUMENT]: {
			screen: UploadDocument,
			navigationOptions: {
				headerTitle: () => <Image style={styles.image} source={LOGO} />,
			},
		},
	},
	{
		initialRouteName: EMPTY_NAV_VIEW,
		headerTitleAlign: 'center',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: colors.mainBackground,
				shadowColor: 'transparent',
				shadowOffset: {
					height: 0,
				},
			},
			title: '',
		},
	},
);

const OverViewNavigator = createStackNavigator(
	{
		[OVERVIEW_SCREEN]: {
			screen: OverView,
			navigationOptions: {
				header: () => <HeaderComponent />,
			},
		},
	},
	{
		initialRouteName: OVERVIEW_SCREEN,
		headerTitleAlign: 'center',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: colors.mainBackground,
				shadowColor: 'transparent',
				shadowOffset: {
					height: 0,
				},
			},
			title: '',
		},
	},
);

const WalletsNavigator = createStackNavigator(
	{
		[WALLETS_SCREEN]: {
			screen: WalletsMain,
			navigationOptions: {
				header: null,
			},
		},
		[WALLETS_ADD]: {
			screen: WalletsAdd,
			navigationOptions: {
				headerRight: () => <InfoIcon />,
				headerLeft: () => <BackIcon />,
			},
		},
		[COIN_WALLET]: {
			screen: CoinWallet,
			navigationOptions: {
				headerLeft: () => <BackIcon />,
				headerRight: () => <InfoIcon />,
			},
		},
		[REFILL]: {
			screen: Refill,
			navigationOptions: {
				headerLeft: () => <BackIcon />,
				headerRight: () => <InfoIcon />,
			},
		},
		[WITHDRAW]: {
			screen: Withdraw,
			navigationOptions: {
				headerLeft: () => <BackIcon />,
				headerRight: () => <InfoIcon />,
			},
		},
		[TRANSACTION_CONFIRM]: {
			screen: TransactionConfirm,
			navigationOptions: {
				headerLeft: () => <BackIcon />,
				headerRight: () => <InfoIcon />,
			},
		},
		[SUCCESS_TRANSACTION]: {
			screen: Success,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		initialRouteName: WALLETS_SCREEN,
		headerTitleAlign: 'center',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: colors.mainBackground,
				shadowColor: 'transparent',
				shadowOffset: {
					height: 0,
				},
			},
			title: '',
		},
		navigationOptions: tabBarVisibility(hiddenTabBarRoutes),
	},
);

const TabNavigator = createBottomTabNavigator(
	{
		[OVERVIEW_TAB]: {
			screen: OverViewNavigator,
			navigationOptions: {
				title: '',
				// header: () => <HeaderComponent />,
				tabBarIcon: ({ focused }: TabBarIconArgs) => <TabBarIcon focused={focused} iconSource={['\uE82A', '\uE82B']} />,
			},
		},
		[WALLETS_TAB]: {
			screen: WalletsNavigator,
			navigationOptions: {
				title: '',
				tabBarIcon: ({ focused }: TabBarIconArgs) => <TabBarIcon focused={focused} iconSource={['\uE847', '\uE848']} />,
			},
		},
		[ANALYTICS_TAB]: {
			screen: Analytics,
			navigationOptions: {
				title: '',
				tabBarIcon: ({ focused }: TabBarIconArgs) => <TabBarIcon focused={focused} iconSource={['\uE804', '\uE805']} />,
			},
		},
		[SETTINGS_TAB]: {
			screen: Settings,
			navigationOptions: {
				title: '',
				tabBarIcon: ({ focused }: TabBarIconArgs) => <TabBarIcon focused={focused} iconSource={['\uE840', '\uE83E']} />,
			},
		},
	},
	{
		initialRouteName: OVERVIEW_TAB,
		tabBarOptions: {
			style: {
				height: 60,
				paddingTop: 10,
			},
		},
	},
);

const AppNavigator = createSwitchNavigator(
	{
		[AUTH_NAV]: {
			screen: AuthNavigator,
		},
		[OVERVIEW_TAB]: {
			screen: TabNavigator,
		},
	},
	{
		initialRouteName: AUTH_NAV,
		headerMode: 'none',
	},
);

export const Navigation = createAppContainer(AppNavigator);
