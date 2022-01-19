// @flow

import { Alert } from 'react-native';

type IRequredSomeValue = Array<string | Array<string>>;

export const formValidators = {
	required: (v: string): boolean => !!v,
	requiredSome: (v: IRequredSomeValue): boolean =>
		v.some(val => (Array.isArray(val) ? val.every(elem => !!elem) : !!val)),
	email: (v: string): boolean => {
		// eslint-disable-next-line
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(v).toLowerCase());
	},
	zip: (v: string): boolean => {
		const re = /^[0-9\d\- \s]+$/i;
		return re.test(String(v).toLowerCase());
	},
	phoneNumber: (v: string): boolean => {
		const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		return re.test(String(v).toLowerCase());
	},
	minLength: (v: string = '', length: number): boolean => v.length >= length,
	maxLength: (v: string = '', length: number): boolean => v.length <= length,
	domain: (v: string): boolean => {
		const re = /^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/;
		return re.test(String(v).toLowerCase());
	},
	same: (v: string, rule: string) => v === rule,
	password: (v: string) => {
		const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/;
		return re.test(v);
	},
	mmyy: (v: string) => {
		const re = /^(0[1-9]|1[0-2])(19|20|(?:[2-9][0-9]))$/;
		if (!re.test(v)) {
			return false;
		}

		return new Date(`20${v.slice(2, 4)}`, v.slice(0, 2)).getTime() >= new Date().getTime();
	},
};

export const validationFunc = args => {
	if (!formValidators.phoneNumber(args[0])) {
		Alert.alert(
			'Error',
			'Please use the following international phone number format [+][country code][subscriber number] for Phone number field (eg: +14028650000).',
		);
		return false;
	} else if (!formValidators.password(args[1])) {
		Alert.alert('Error', 'Password must be at least 7 characters, 1 digit, 1 letter and 1 uppercase is required');
		return false;
	} else if (!!args[2]) {
		if (args[1] !== args[2]) {
			Alert.alert('Error', 'Sorry passwords is different.\nPlease try again.');
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
	return false;
};

export const isEmail = (v: string): boolean => formValidators.email(v);

const errors = {
	required: 'This field is required',
	requiredSome: 'This field is required',
	email: 'That doesn’t look right ...',
	zip: 'That doesn’t look right ...',
	number: 'That doesn’t look right ...',
	card: 'That doesn’t look right ...',
	domain: 'That doesn’t look right ...',
	minLength: value => `Minimum ${value} symbols`,
	maxLength: value => `Maximum ${value} symbols`,
	same: 'The values are not the same',
	password: 'That doesn’t look right ...',
	mmyy: 'That doesn’t look right ...',
};

export const validations = {
	required: 'required',
	requiredSome: 'requiredSome',
	email: 'email',
	zip: 'zip',
	number: 'number',
	card: 'card',
	domain: 'domain',
	minLength: 'minLength',
	maxLength: 'maxLength',
	same: 'same',
	password: 'password',
	mmyy: 'mmyy',
};

export const validateForm = (params: Array<string | Object> = [], value: string | IRequredSomeValue) => {
	const e = {};
	const restrictions = {};

	params.forEach(validation => {
		if (typeof validation === 'string') {
			restrictions[validation] = true;
			const hasError = !formValidators[validation](value);
			if (hasError) {
				e[validation] = true;
			}
		} else if (typeof validation === 'object') {
			const key = Object.keys(validation)[0];
			const rules: Object = Object.values(validation)[0];

			if (typeof rules === 'object') {
				const { rule } = rules;
				restrictions[key] = rules;
				const hasError = !formValidators[key](value, rule);

				if (hasError) {
					e[key] = true;
				}
			} else {
				restrictions[key] = rules;
				const hasError = !formValidators[key](value, rules);
				if (hasError) {
					e[key] = true;
				}
			}
		}
	});

	if (!Object.keys(e).length) {
		return null;
	}

	const error = errors[Object.keys(e)[0]];

	return typeof error === 'function' ? error(restrictions[Object.keys(e)[0]]) : error;
};
