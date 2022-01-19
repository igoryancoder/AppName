import { fromRight, fromTop, fromBottom, zoomIn, flipY, flipX } from 'react-navigation-transitions';
import { WELCOME_SCREEN } from '../constants';

export const handleCustomTransition = ({ scenes }) => {
	const prevScene = scenes[scenes.length - 2];
	const nextScene = scenes[scenes.length - 1];
	console.log('prevScene', prevScene);
	if (prevScene && prevScene.route.routeName === WELCOME_SCREEN) {
		return zoomIn(1000);
	}
	return fromRight(300);
};

// if (
//   prevScene
//   && prevScene.route.routeName === routes.LOGIN
//   && nextScene.route.routeName === routes.QUICK_SERVICES
// ) {
//   return fromBottom(500);
// }
// if (
//   prevScene
//   && prevScene.route.routeName === routes.QUICK_SERVICES
//   && nextScene.route.routeName === routes.LOGIN
// ) {
//   return fromTop(500);
// }

// if (
//   prevScene
//   && prevScene.route.routeName === routes.MORE_HOME
//   && flipRedirectArray.includes(nextScene.route.routeName)
//   && isIOS
// ) {
//   return flipY(700);
// } if (
//   prevScene
//   && prevScene.route.routeName === routes.OVERVIEW_HOME
//   && nextScene.route.routeName === routes.ACCOUNT_SETTINGS
//   && isIOS
// ) {
//   return flipX(800);
// }

// };
