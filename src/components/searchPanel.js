import React from 'react'
import Inexperienced from '../components/inexperienced'
import Salary from '../components/salary'
import Keyword from '../components/keyword'

const SearchPanel = props => {
  const { inexperienced, salary, toggleInexperienced, selectSalary } = props
  return (
    <div className="search-panel">
      <h1>検索</h1>
      <form>
        <Inexperienced inexperienced={inexperienced} toggleInexperienced={toggleInexperienced}/>
        <Salary salary={salary} selectSalary={selectSalary}/>
        <Keyword keyword='' typeKeyword={ e => { console.log(`${e.currentTarget.value} is typed`) } } />
      </form>
    </div>
  )
}

export default SearchPanel
