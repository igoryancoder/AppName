// @flow

import AsyncStorage from '@react-native-community/async-storage';
import Keychain, { ACCESSIBLE } from 'rn-secure-storage';

export const Storage = {
	get: ({ key }: { key: string }) => AsyncStorage.getItem(key),
	set: ({ key, value }: { key: string, value: string }) => AsyncStorage.setItem(key, value),
};

export const SecureStorage = {
	get: async ({ key }: { key: string }) => {
		try {
			const value = await Keychain.get(key);

			return value;
		} catch (error) {
			return null;
		}
	},
	set: ({ key, value }: { key: string, value: string }) =>
		Keychain.set(key, value, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY }),
	remove: async ({ key }: { key: string }) => {
		try {
			if (await Keychain.exists(key)) {
				return await Keychain.remove(key);
			}

			return null;
		} catch (error) {
			return null;
		}
	},
};
