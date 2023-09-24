import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import {setUser} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispach) => {
    return {
        setUser: (user) => dispach(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
