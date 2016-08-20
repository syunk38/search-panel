import salary from './salary.js'
import inexperienced from './inexperienced.js'
import keyword from './keyword.js'
import { combineReducers } from 'redux'

const searchConditions = combineReducers({
  salary,
  inexperienced,
  keyword
})

export default searchConditions
