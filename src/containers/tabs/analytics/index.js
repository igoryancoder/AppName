// @flow
import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { compose } from 'recompose';
import { connect } from 'react-redux';

type AnalyticsScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const Analytics = compose(connect(null, mapDispatchToProps))(({ navigation }: AnalyticsScreenProps) => {
	return (
		<>
			<Text style={{ alignSelf: 'center', marginTop: 150 }}>ANALYTICS</Text>
		</>
	);
});
