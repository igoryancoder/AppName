import { Dimensions, Platform, Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';
export const WINDOW = Dimensions.get('window');
import { Icon } from '../components/icons';

const xModels = ['iPhone X', 'iPhone XR', 'iPhone XS', 'iPhone XS', 'iPhone XS Max'];
const androidNoSplashScreen = ['Nokia 6.1'];

export const deviceModel = DeviceInfo.getModel();
export const deviceName = DeviceInfo.getDeviceName();

export const isIOS = Platform.OS === 'ios';
export const isXModel = xModels.indexOf(deviceModel) !== -1;

export const BIOMETRIC_ERRORS = {
	LAErrorTouchIDNotEnrolled: `Authentication could not start because ${
		isXModel ? 'Face ID' : 'Touch ID'
	} has no enrolled ${isXModel ? 'faces' : 'fingers'}.`, // NOSONAR
	LAErrorTouchIDLockout: 'Authentication failed because of too many failed attempts.',
	RCTTouchIDUnknownError: 'Could not authenticate for an unknown reason.',
	NOT_ENROLLED: 'Authentication could not start because Fingerprint has no enrolled fingers.',
};

export const coins = {
	eth: {
		name: 'Ethereum (ETH)',
		smallName: '(ETH)',
		icon: Icon.icons.enthereum,
		id: 'eth',
	},
	tbtc: {
		name: 'Bitcoin (BTC)',
		smallName: '(BTC)',
		icon: Icon.icons.bitcoin,
		id: 'tbtc',
	},
};

export const messageFire = (header, mess, callback = () => {}) => {
	setTimeout(() => {
		Alert.alert(
			header,
			mess,
			[
				{
					text: 'OK',
					onPress: () => callback(),
				},
			],
			{
				cancelable: false,
			},
		);
	}, 400);
};

export const tabBarVisibility = (hiddenTabBarRoutes, otherOptions = {}) => ({ navigation }) => {
	const { routeName } = navigation.state.routes[navigation.state.index];
	if (hiddenTabBarRoutes.indexOf(routeName) !== -1) {
		return { tabBarVisible: false, ...otherOptions };
	}

	return {
		tabBarVisible: true,
		...otherOptions,
	};
};
