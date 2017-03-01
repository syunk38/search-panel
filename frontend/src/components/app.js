import React from 'react'
import SearchPanel from './searchPanel'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as searchConditionActions from '../actions'

const mapStateToProps = state => {
  return {
    inexperienced: state.inexperienced,
    salary: {
      min: state.salary.min,
      max: state.salary.max
    },
    keyword: state.keyword
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(searchConditionActions, dispatch)
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel)

export default App
