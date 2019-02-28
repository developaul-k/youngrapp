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
        this._refresh();
    };

    componentWillReceiveProps = nextProps => {
        if ( nextProps.likes ) {
            this.setState({
                isFetching: false
            })
        }
    }

    render() {
        return <LikesScreen { ...this.state } { ...this.props } refresh={ this._refresh } />
    }

    _refresh = () => {
        const { getLikePhoto, navigation: { state: { params: { photoId } } } } = this.props;
        this.setState({
            isFetching: true
        })
        getLikePhoto(photoId);
    }
}

export default Container;