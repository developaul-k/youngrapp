import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LikesScreen from './presenter';

class Container extends Component {
    state = {
        isFetching: false
    }

    static propTypes = {
        getLikePhoto: PropTypes.func.isRequired,
    }

    componentDidMount = () => {
        const { getLikePhoto, navigation: { state: { params: { photoId } } } } = this.props;
        getLikePhoto(photoId)
    };

    render() {
        return <LikesScreen />
    }
}

export default Container;