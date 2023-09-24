import { connect } from 'react-redux'
import Business from '../components/Business'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    }
}

export default connect(mapStateToProps)(Business)