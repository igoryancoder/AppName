// @flow
import React from 'react';
import { Modal, View, ActivityIndicator, StyleSheet } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { colors } from '../../constants';

type SpinnerProps = {
	isFetching: boolean,
};

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: '#00000030',
	},
	indicatorContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 65,
		width: 65,
		paddingLeft: 4,
		paddingTop: 4,
		borderRadius: 10,
		backgroundColor: 'rgba(51, 51, 51, 0.8)',
	},
});

const mapStateToProps = state => ({
	isFetching: state.auth.loadingReducer.isFetching,
});

export const SpinnerComponent = compose(connect(mapStateToProps))(({ isFetching }: SpinnerProps) => (
	<Modal transparent animationType="none" visible={isFetching}>
		<View style={styles.modalBackground}>
			<View style={styles.indicatorContainer}>
				<ActivityIndicator size="large" color={colors.white} animating={isFetching} />
			</View>
		</View>
	</Modal>
));
