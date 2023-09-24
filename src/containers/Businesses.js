import { connect } from 'react-redux'
import Businesses from '../components/Businesses'
import { removeIndex } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeIndex: (index) => dispatch(removeIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Businesses)
