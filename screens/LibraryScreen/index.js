import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LibraryScreen from './presenter';
import { CameraRoll } from 'react-native';

class Container extends Component {
    state = {
        photo: null,
        pickedPhoto: null
    }

    componentWillMount = async() => {
        const { edges } = await CameraRoll.getPhotos({
            first: 30,
            groupTypes: 'SavedPhotos',
            assetType: 'Photos'
        })

        this.setState({
            photos: edges,
            pickedPhoto: edges[0]
        });
    }

    render() {
        return <LibraryScreen
                    { ...this.state }
                    pickPhoto={this._pickPhoto}
                    approvePhoto={this._approvePhoto} />
    }
    _pickPhoto = (photo) => {
        this.setState({
            pickedPhoto: photo
        })
    }
    _approvePhoto = () => {
        const { navigation: { navigate } } = this.props;
        const { pickedPhoto } = this.state;
        navigate('UploadPhoto', { url: pickedPhoto.node.image.uri });
    }
}

export default Container;
