import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => ({
    cars: state.cars,
    user: state.user
})

export default connect(mapStateToProps)(Dashboard);
