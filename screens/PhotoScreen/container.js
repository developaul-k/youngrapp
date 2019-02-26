import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    StyleSheet
} from 'react-native';
import Photo from '../../components/Photo';

class Container extends Component {
    state = {
        photoObject: null,
        isFetching: false
    }
    render() {
        return (
            <View style={ styles.container }>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isFetching}
                            onRefresh={this._refresh}
                            tintColor={"black"}
                            titleColor={"black"}
                        />
                    }
                >
                    {
                        this.state.photoObject !== null && <Photo {...this.state.photoObject} />
                    }
                    { console.log( this.state.photoObject ) }
                </ScrollView>
            </View>
        )
    }

    componentDidMount = () => {
        this._refresh();
    }

    _refresh = async() => {
        const {
            getImage,
            navigation: {
                state: {
                    params: {
                        imageId
                    }
                }
            }
        } = this.props;

        this.setState({
            isFetching: true
        })

        const completeImage = await getImage(imageId);

        if ( completeImage.id ) {
            this.setState({
                photoObject: completeImage,
                isFetching: false
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Container;