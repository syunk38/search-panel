import React from 'react'
import FirstPanel from './firstPanel'

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
        <FirstPanel {...props}/>
      </form>
    </div>
  )
}

export default SearchPanel
