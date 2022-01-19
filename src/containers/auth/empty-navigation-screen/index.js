// @flow
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationState, StackActions, NavigationActions } from 'react-navigation';
import { WELCOME_SCREEN, SECURITY_CODE_SCREEN } from '../../../constants';
import { Storage } from '../../../utils/storage';
import { appStyles } from '../../../constants';

type EmptyNavViewScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

export const EmptyNavView = ({ navigation }: EmptyNavViewScreenProps) => {
	useEffect(() => {
		Storage.get({ key: 'mainScreen' }).then(screen => {
			console.log('screen', screen);
			const mainPage = !screen && screen !== 'false' ? WELCOME_SCREEN : screen;
			const resetAction = StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: mainPage })],
			});
			navigation.dispatch(resetAction);
		});
	});
	return <View style={{ ...appStyles.container }} />;
};
