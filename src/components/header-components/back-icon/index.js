// @flow
import React from 'react';
import { withNavigation, NavigationScreenProp, NavigationState } from 'react-navigation';
import { Icon } from '../../icons';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type BackIconProps = {
	navigation: NavigationScreenProp<NavigationState>,
	onPress?: () => {},
};
console.log('Icon.icons', Icon.icons);
export const BackIcon = withNavigation(({ navigation, onPress }: BackIconProps) => (
	<TouchableOpacity
		style={[styles.backIconContainer, { marginLeft: 16 }]}
		onPress={() => {
			if (onPress && typeof onPress === 'function') {
				onPress();
			} else {
				navigation.goBack(null);
			}
		}}
	>
		<Icon style={{}} icon={Icon.icons.back} calculatedHeight={20} calculatedWidth={11} />
	</TouchableOpacity>
));
