// @flow
import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { compose } from 'recompose';
import { connect } from 'react-redux';

type SettingsScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const Settings = compose(connect(null, mapDispatchToProps))(({ navigation }: SettingsScreenProps) => {
	return (
		<>
			<Text style={{ alignSelf: 'center', marginTop: 150 }}>SETTINGS</Text>
		</>
	);
});
