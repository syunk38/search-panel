import salary from './salary.js'
import inexperienced from './inexperienced.js'
import { combineReducers } from 'redux'

const searchConditions = combineReducers({
  salary,
  inexperienced
})

export default searchConditions
