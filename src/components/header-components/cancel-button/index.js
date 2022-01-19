// @flow
import React from 'react';
import { withNavigation, NavigationScreenProp, NavigationState } from 'react-navigation';
import { Icon } from '../../icons';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../back-icon/styles';

type CloseIconProps = {
	navigation: NavigationScreenProp<NavigationState>,
	onPress?: () => {},
};

export const CloseIcon = withNavigation(({ navigation, onPress }: CloseIconProps) => (
	<TouchableOpacity
		style={styles.backIconContainer}
		onPress={() => {
			if (onPress && typeof onPress === 'function') {
				onPress();
			} else {
				navigation.goBack(null);
			}
		}}
	>
		<Icon style={{}} icon={Icon.icons.cancel} calculatedHeight={23} calculatedWidth={23} />
	</TouchableOpacity>
));
