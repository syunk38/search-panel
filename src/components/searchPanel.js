import React from 'react'
import Inexperienced from '../containers/inexperienced'
import Salary from '../containers/salary'

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <h1>検索</h1>
      <form>
        <Inexperienced />
        <Salary />
      </form>
    </div>
  )
}

export default SearchPanel
