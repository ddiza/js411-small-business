import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import { addBusiness } from '../redux/actions'



const mapDispatchToProps = (dispach) => {
    return {
        addBusiness: (business) => dispach(addBusiness(business))
    }
}

export default connect(null, mapDispatchToProps)(AddBusiness)
