import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo';
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
    >
        <View style={styles.container}>
            { console.log( props.feed ) }
            { props.feed && props.feed.map(photo => <Photo {...photo} key={photo.id} />) }
        </View>
    </ScrollView>
);

FeedScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    feed: PropTypes.array
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});

export default FeedScreen;