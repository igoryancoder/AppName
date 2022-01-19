// @flow
import React, { useRef } from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Swiper from 'react-native-swiper'; // use import ViewPager from '@react-native-community/viewpager'; inside this module
import { SwiperContent } from '../../../components';
import { colors, texts, LOGIN_SCREEN } from '../../../constants';
import { Storage } from '../../../utils/storage';
import styles from './styles';

type WelcomeScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

export const Welcome = ({ navigation }: WelcomeScreenProps) => {
	const swiperRef = useRef<Swiper | null>(null);
	// const handleBackPress = () => {
	//   if (navigation.isFocused()) {
	//     return true;
	//   }
	//   return false;
	// };
	// BackHandler.addEventListener('hardwareBackPress', handleBackPress);

	function pressHandler() {
		const activeIndex = swiperRef.current.state.index;
		if (activeIndex === 3) {
			Storage.set({ key: 'mainScreen', value: LOGIN_SCREEN }).then(() => {
				navigation.navigate(LOGIN_SCREEN);
			});
		} else {
			swiperRef.current.scrollBy(1, true);
		}
	}

	const renderContent = () =>
		texts.welcome.screens.map((item, key) => (
			<SwiperContent key={JSON.stringify(item)} {...{ item, index: key }} callback={pressHandler} />
		));

	return (
		<View style={styles.container}>
			<Swiper
				ref={swiperRef}
				activeDotColor={colors.primary}
				loop={false}
				dotColor={colors.notActiveGray}
				style={styles.wrapper}
			>
				{renderContent()}
			</Swiper>
		</View>
	);
};
