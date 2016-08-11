import React from 'react'
import Inexperienced from '../components/inexperienced'
import Salary from '../components/salary'
import Keyword from '../components/keyword'

const SearchPanel = props => {
  const {
    inexperienced,
    salary,
    keyword,
    toggleInexperienced,
    selectSalary,
    typeKeyword
  } = props

  return (
    <div className="search-panel">
      <h1>検索</h1>
      <form>
        <Inexperienced inexperienced={inexperienced} toggleInexperienced={toggleInexperienced}/>
        <Salary salary={salary} selectSalary={selectSalary}/>
        <Keyword keyword={keyword} typeKeyword={typeKeyword} />
      </form>
    </div>
  )
}

export default SearchPanel
