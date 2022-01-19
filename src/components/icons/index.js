// @flow

import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// import { Touchable } from '..';
// import { calculateSize, normalize } from '../../utils/sizes';

import bitcoin from './bitcoin.svg';
import goal from './goal.svg';
import enthereum from './enthereum.svg';
import back from './back.svg';
import cancel from './cancel.svg';
import camera from './camera.svg';
// import checkBox from './checkBox.svg';	need to change svg icon to valid svg
import success from './success.svg';
import trash from './trash.svg';
import verification from './verification.svg';
import eyeClose from './eyeClose.svg';
import eyeOpen from './eyeOpen.svg';

import { appStyles, colors } from '../../constants';

const Icons = {
	bitcoin,
	goal,
	enthereum,
	back,
	cancel,
	camera,
	eyeClose,
	eyeOpen,
	// checkBox,
	success,
	trash,
	verification,
};

type IProps = {
	icon: any,
	width?: ?number,
	height?: ?number,
	style?: Object,
	onLayout?: Function,
	calculatedWidth?: any,
	calculatedHeight?: any,
};

export const Icon = ({
	icon: SelectedIcon,
	width,
	height,
	style,
	calculatedWidth,
	calculatedHeight,
	onLayout,
	...props
}: IProps) => {
	let svgWidth;
	let svgHeight;

	if (width && height) {
		const size = { width, height }; // calculateSize(

		svgWidth = size.width;
		svgHeight = size.height;
	}

	return (
		<View style={style} onLayout={onLayout}>
			<SelectedIcon width={calculatedWidth || svgWidth} height={calculatedHeight || svgHeight} {...props} />
		</View>
	);
};

Icon.defaultProps = {
	style: {},
	width: null,
	height: null,
	onLayout: null,
	calculatedWidth: null,
	calculatedHeight: null,
};

Icon.icons = Icons;

type IPressableIcon = {
	onPress?: Function,
	activeOpacity?: number,
	children: React.Node,
};

const styles = StyleSheet.create({
	touchable: {
		minHeight: 24,
		minWidth: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export const PressableIcon = (props: IPressableIcon): React.Node => {
	const { onPress, children, activeOpacity, ...params } = props;

	return (
		<TouchableOpacity
			style={styles.touchable}
			onPress={onPress}
			{...props}
			activeOpacity={onPress ? activeOpacity : 1}
			{...params}
		>
			{children}
		</TouchableOpacity>
	);
};

PressableIcon.defaultProps = {
	onPress: null,
	activeOpacity: 0.6,
};
