import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const LikesScreen = props => {
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={props.isFetching}
                    onRefresh={props.refresh}
                    tintColor={"black"}
                />
            }
        >
            <View style={ styles.container }>
                { props.likes.length > 0 ? (
                    props.likes.map( like => (
                        <View style={ styles.likeList } key={ like.id }>
                            <View style={ styles.userInfo }>
                                <Image
                                    style={ styles.avatar }
                                    source={
                                        like.profile_image
                                        ? {
                                            uri: like.profile_image
                                            }
                                        : require("../../assets/images/noPhoto.jpg")
                                    }
                                    defaultSource={require("../../assets/images/noPhoto.jpg")}
                                />
                                <Text style={ styles.username }> { like.username } </Text>
                            </View>
                            <TouchableOpacity style={ styles.touchable }>
                                <View style={ styles.button }>
                                    <Text style={ styles.btnText }>
                                        { like.following ? 'Unfollow' : 'Follow' }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                ) : (
                    <Text>No Likes</Text>
                ) }
            </View>
        </ScrollView>
    )
}

LikesScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    likeList: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15
    },
    username: {
        fontWeight: '600'
    },
    touchable: {
        borderRadius: 3,
        backgroundColor: "#3e99ee"
    },
    button: {
        borderRadius: 3,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        overflow: "hidden",
    },
    btnText: {
        fontWeight: "600",
        textAlign: "center",
        color: "white"
    }
})

export default LikesScreen;