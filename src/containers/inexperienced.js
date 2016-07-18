import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InexperiencedCheckBox from '../components/inexperiencedCheckBox'
import { toggleInexperienced } from '../actions'

const mapStateToProps = state => {
  return {
    inexperienced: state.inexperienced
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleInexperienced }, dispatch)
}

const Inexperienced = connect(
  mapStateToProps,
  mapDispatchToProps
)(InexperiencedCheckBox)

export default Inexperienced;
