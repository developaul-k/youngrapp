import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    StyleSheet
} from 'react-native';

const FeedScreen = props => (
    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={props.isFetching}
                onRefresh={props.refresh}
                tintColor={"black"}
            />
        }
        contentContainerStyle={styles.container}
    />
);

FeedScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});

export default FeedScreen;