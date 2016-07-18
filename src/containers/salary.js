import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SalarySelectBox from '../components/salarySelectBox'
import { selectSalary } from '../actions'

const mapStateToProps = state => {
  return {
    min: state.salary.min,
    max: state.salary.max
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectSalary }, dispatch)
}

const Salary = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalarySelectBox)

export default Salary;
