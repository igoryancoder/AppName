// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { texts, WALLETS_SCREEN } from '../../../../constants';
import moment from 'moment';
import styles from './styles';

type SuccessScreenProps = {
	navigation: NavigationScreenProp<NavigationState>,
};

const mapDispatchToProps = {};

export const Success = compose(connect(null, mapDispatchToProps))(({ navigation }: SuccessScreenProps) => {
	const date = `${moment().format('DD MMMM YYYY')} at ${moment().format('hh:mm')}`;
	return (
		<View style={styles.container}>
			<Icon style={styles.icon} icon={Icon.icons.goal} calculatedHeight={70} calculatedWidth={70} />
			<Text style={styles.mainHeader}>{texts.wallet.success.header}</Text>
			<Text style={styles.header}>{texts.wallet.withdraw.header}</Text>
			<Text numberOfLines={1} style={[styles.headerText, { width: 150 }]}>
				{texts.wallet.withdraw.toSmall} <Text style={styles.key}>bc1qresxes6yeljwtruzh79cfa26gkmqdmd9t3kvya</Text>
			</Text>

			<Text style={styles.amountText}>
				0.00000090 <Text style={styles.amountName}>BTC</Text>
			</Text>
			<Text style={styles.headerText}>
				{texts.wallet.success.fiat} <Text style={styles.mony}>$444</Text>
			</Text>
			<Text style={[styles.headerText, { marginTop: 16 }]}>{date}</Text>

			<Button
				buttonStyle={styles.buttonBottom}
				onPress={() => navigation.navigate(WALLETS_SCREEN)}
				text={texts.wallet.withdraw.back}
			/>
		</View>
	);
});
