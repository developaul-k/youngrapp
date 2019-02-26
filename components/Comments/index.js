import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import { Ionicons } from '@expo/vector-icons';

const Comments = props => {
    return (
        <View style={ props.caption ? styles.creatorContainer : styles.commentsContainer }>
            <FadeIn>
                <Image
                    source={ props.comments.creator.profile_image ? {
                        uri: props.comments.creator.profile_image
                    } : require('../../assets/images/noPhoto.jpg') }
                    style={ styles.avatar }
                />
            </FadeIn>
            <View style={ styles.creatorInfo }>
                <View style={ styles.creatorComment }>
                    <TouchableOpacity>
                        <View>
                            <Text style={ styles.creator }>{ props.comments.creator.username }</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={ styles.caption }>
                        { props.comments.message }
                    </Text>
                </View>
                {
                    !props.caption && (
                        <TouchableOpacity style={ styles.heart }>
                            <View>
                                <Ionicons name="ios-heart-empty" size={ 15 } color="black" />
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    creatorContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentsContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    creatorInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    creatorComment: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    creator: {
        fontSize: 14,
        fontWeight: '700'
    },
    caption: {
        marginLeft: 5,
        fontSize: 14
    },
    avatar: {
		width: 30,
		height: 30,
		borderRadius: 20,
		marginRight: 10
    }
});

export default Comments;