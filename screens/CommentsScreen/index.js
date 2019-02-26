import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Comments from '../../components/Comments';

const CommentsScreen = props => {
    const { navigation : { state: { params: { userInfo, comments } } } } = props;

    return (
        <ScrollView style={ styles.container }>
            <Comments caption={ true } comments={ userInfo } />
            <View>
                {
                    comments.map( ( comment, idx ) =>
                        <Comments caption={ false } comments= { comment } key={ comment.id } />
                    )
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
});
export default CommentsScreen;