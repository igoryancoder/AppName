/**
 * @format
 * @flow
 */

import * as React from 'react';
import { useScreens } from 'react-native-screens';
import { Platform, StatusBar } from 'react-native';

// import { Navigation } from './navigations';
import { Store } from './store';

Platform.select({ ios: useScreens, android: () => {} })();

console.disableYellowBox = true;

export const Application = (): React.Node => (
	<>
		<StatusBar barStyle="dark-content" />
		<Store />
	</>
);
