import { connect } from 'react-redux'
import InexperiencedCheckBox from '../components/inexperiencedCheckBox'

const mapStateToProps = state => {
  return {
    inexperienced: state.inexperienced
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInexperiencedChange: () => {
      dispatch({
        type: 'TOGGLE_INEXPERIENCED'
      });
    }
  }
}

const Inexperienced = connect(
  mapStateToProps,
  mapDispatchToProps
)(InexperiencedCheckBox)

export default Inexperienced;
