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
        photoObject: null
    }
    render() {
        return (
            <View style={ styles.container }>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isFetching}
                            onRefresh={this.props.refresh}
                            tintColor={"black"}
                            titleColor={"black"}
                        />
                    }
                >
                    {
                        this.state.photoObject !== null && <Photo {...this.state.photoObject} />
                    }
                </ScrollView>
            </View>
        )
    }

    componentDidMount = () => {
        this._getImage();
    }

    _getImage = async() => {
        const { getImage, navigation: { state: { params: { imageId } } } } = this.props;
        const completeImage = await getImage(imageId);

        if (completeImage.id) {
            this.setState({
                photoObject: completeImage
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