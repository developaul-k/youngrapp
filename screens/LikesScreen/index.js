import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLikePhoto: ( photoId ) => {
            dispatch(photoActions.getLikePhoto( photoId ));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);