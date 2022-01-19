// @flow
import React from 'react';
import { withNavigation, NavigationScreenProp, NavigationState } from 'react-navigation';
import { Icon } from '../../icons';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../back-icon/styles';

type TrashIconProps = {
	navigation: NavigationScreenProp<NavigationState>,
	onPress?: () => {},
};

export const TrashIcon = withNavigation(({ navigation, onPress }: TrashIconProps) => (
	<TouchableOpacity
		style={styles.backIconContainer}
		onPress={() => {
			if (onPress && typeof onPress === 'function') {
				onPress();
			} else {
				alert('inProgress');
			}
		}}
	>
		<Icon style={{}} icon={Icon.icons.trash} calculatedHeight={23} calculatedWidth={23} />
	</TouchableOpacity>
));
