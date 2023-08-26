import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
    cars: state.cars
})

export default connect(mapStateToProps)(Home);
