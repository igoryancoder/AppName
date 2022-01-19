// @flow

import * as React from 'react';
import { connect, Provider } from 'react-redux';
import TouchID from 'react-native-touch-id';

import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import {
	createReactNavigationReduxMiddleware,
	createNavigationReducer,
	createReduxContainer,
} from 'react-navigation-redux-helpers';

import rootSaga from './sagas';

import AuthReducer from './reducers';
import { Navigation } from '../navigation';
import { SpinnerComponent } from '../components';

// REDUCERS

const rootReducer: Object = combineReducers({
	nav: createNavigationReducer(Navigation),
	// form: formReducer,
	auth: AuthReducer,
	// state: StateReducer,
});

const mapStateToProps = state => ({
	state: state.nav,
});

const Application = createReduxContainer(Navigation);

const AppWithNavigationState = connect(mapStateToProps)(Application);

// MIDDLEWARES

const sagaMiddleware = createSagaMiddleware();
const navigationMiddleware = createReactNavigationReduxMiddleware(state => state.nav);

// STORE

export const configureStore = (preloadedState: Object): Function =>
	createStore(rootReducer, preloadedState, applyMiddleware(sagaMiddleware, navigationMiddleware));

export const store: Object = configureStore();

sagaMiddleware.run(rootSaga);

export const Store = (): React.Node => {
	React.useEffect(() => {
		TouchID.isSupported()
			.then(biometryType => {
				if (biometryType === 'TouchID' || biometryType === 'FaceID') {
					Storage.set({ key: 'protectionType', value: { type: biometryType.replace(/ID/g, ' ID') } });
				} else {
					Storage.set({ key: 'protectionType', value: { type: 'Fingerprint' } });
				}
			})
			.catch(() => {});
	});

	return (
		<Provider store={store}>
			<AppWithNavigationState />
			<SpinnerComponent />
		</Provider>
	);
};
