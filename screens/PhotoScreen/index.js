import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from '../../redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getImage: imageId => {
            return dispatch(photoActions.getImage(imageId))
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);