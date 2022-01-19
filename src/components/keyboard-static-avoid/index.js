// @flow

import * as React from 'react';
import { KeyboardAvoidingView as KeyboardAvoidingViewNative, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type IProps = {
	fullHeight?: boolean,
	children: any,
	contentContainerStyle?: Object,
};

export const KeyboardStaticAvoid = ({ fullHeight, children, contentContainerStyle, ...props }: IProps): React.Node => (
	// $FlowFixMe
	<KeyboardAwareScrollView
		bounces={false}
		contentContainerStyle={{
			...(fullHeight ? { flexGrow: 1 } : {}),
			...contentContainerStyle,
		}}
		keyboardShouldPersistTaps="handled"
		enableResetScrollToCoords
		enableOnAndroid
		{...props}
	>
		{children}
	</KeyboardAwareScrollView>
);

KeyboardStaticAvoid.defaultProps = {
	fullHeight: false,
	contentContainerStyle: {},
};

export const KeyboardAvoidingView = ({ children }: { children: any }) => (
	<KeyboardAvoidingViewNative
		style={{ flex: 1 }}
		contentContainerStyle={{ flexGrow: 1 }}
		behavior="padding"
		enabled={Platform.OS !== 'android'}
	>
		{children}
	</KeyboardAvoidingViewNative>
);
