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

import SquarePhoto from '../../components/SquarePhoto';

const { width } = Dimensions.get('window');

const SearchScreen = props => (
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
            { props.search.length === 0 && props.searchingBy.length >= 1 ? (
                <Text style={styles.notFound}>No images found for { props.searchingBy }</Text>
            ) : props.search.map(photo => <SquarePhoto key={photo.id} imageURL={photo.file} imageId={photo.id} />) }
        </View>
    </ScrollView>
);

SearchScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    search: PropTypes.array
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

export default SearchScreen;