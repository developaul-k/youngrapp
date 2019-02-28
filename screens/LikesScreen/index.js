import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { photos: { likes } } = state;
    return {
        likes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLikePhoto: ( photoId ) => {
            dispatch(photoActions.getLikePhoto( photoId ));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);