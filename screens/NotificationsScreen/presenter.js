import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    StyleSheet,
    Dimensions
} from 'react-native';

import Notification from '../../components/Notification';

const { width } = Dimensions.get('window');

const NotificationsScreen = props => (
    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={props.isFetching}
                onRefresh={props.refresh}
                tintColor={"black"}
            />
        }
    >
        <View style={styles.container}>
            { props.notifications.length === 0 && props.notifications.length >= 1 ? (
                <Text style={styles.notFound}>
                    No notifications yet! Come back soon!
                </Text>
            ) : props.notifications.map(notifications => (
                <Notification key={notifications.id} {...notifications} />
            )) }
        </View>
    </ScrollView>
);

NotificationsScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    notifications: PropTypes.array
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    notFound: {
        color: '#bbb',
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
        width,
        marginTop: 20,
    }
});

export default NotificationsScreen;