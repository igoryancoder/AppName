// @flow

import { URL } from '../constants/config';
// import { STORAGE_AUTH_TOKEN } from '../constants/storage';
// import { SecureStorage } from './storage';

type IProps = {
	url?: string,
	path?: string,
	method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
	headers?: Object,
	body?: Object,
	returnable?: boolean,
};

const getParams = (params: Object) =>
	Object.keys(params)
		.map(key => `${key}=${params[key]}`)
		.join('&');

export default class Request {
	static async saveToken(value: string) {
		await SecureStorage.set({ key: STORAGE_AUTH_TOKEN, value });
	}

	static async getToken() {
		try {
			const data = await SecureStorage.get({ key: STORAGE_AUTH_TOKEN });

			return data;
		} catch (error) {
			return null;
		}
	}

	static get(params: IProps) {
		return this.request({ method: 'GET', ...params });
	}

	static post(params: IProps) {
		return this.request({ method: 'POST', ...params });
	}

	static put(params: IProps) {
		return this.request({ method: 'PUT', ...params });
	}

	static delete(params: IProps) {
		return this.request({ method: 'DELETE', ...params });
	}

	static patch(params: IProps) {
		return this.request({ method: 'PATCH', ...params });
	}

	static async request({ url, path = '', method, body = {}, headers = {}, returnable = false }: IProps) {
		// let url: Object | string = `${URL}${path}`;

		const defaultHeaders = {
			'Content-Type': 'application/json',
		};

		const options = {
			method,
			body: method === 'GET' ? getParams(body || {}) : JSON.stringify(body),
			headers: { ...defaultHeaders, ...headers },
		};

		if (method === 'GET') {
			delete options.body;
		}

		return fetch(URL + path, options).then(response => {
			if (returnable) {
				return response;
			}
			return response.json().then(payload => {
				if (payload.success === false) {
					throw payload;
				}

				const optionalErrorMessage = payload?.statusMessage;

				if (
					response.status === 500 ||
					payload.responseCode === 10 ||
					(optionalErrorMessage ? optionalErrorMessage.toLowerCase() : '').includes('error')
				) {
					throw payload;
				}

				if (response.status === 200 && payload.error) {
					throw payload;
				}

				if (response.ok) {
					if (response.status === 204) {
						return Promise.resolve();
					}

					return payload;
				}

				throw response;
			});
		});
	}
}
