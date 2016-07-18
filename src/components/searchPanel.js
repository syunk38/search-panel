import React from 'react'
import Inexperienced from '../components/inexperienced'
import Salary from '../components/salary'

const SearchPanel = props => {
  const { inexperienced, salary, toggleInexperienced, selectSalary } = props
  return (
    <div className="search-panel">
      <h1>検索</h1>
      <form>
        <Inexperienced inexperienced={inexperienced} toggleInexperienced={toggleInexperienced}/>
        <Salary salary={salary} selectSalary={selectSalary}/>
      </form>
    </div>
  )
}

export default SearchPanel
