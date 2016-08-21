import React from 'react'
import Inexperienced from '../components/inexperienced'
import Salary from '../components/salary'
import Keyword from '../components/keyword'

const FirstPanel = props => {
  const {
    inexperienced,
    salary,
    keyword,
    toggleInexperienced,
    selectSalary,
    typeKeyword
  } = props

  return (
    <div className="fisrt-panel">
        <Inexperienced inexperienced={inexperienced} toggleInexperienced={toggleInexperienced}/>
        <Salary salary={salary} selectSalary={selectSalary}/>
        <Keyword keyword={keyword} typeKeyword={typeKeyword} />
    </div>
  )
}

export default FirstPanel
