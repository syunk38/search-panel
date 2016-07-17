import React from 'react'
import Inexperienced from '../containers/inexperienced.js'

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <h1>検索</h1>
      <form>
        <Inexperienced />
      </form>
    </div>
  )
}

export default SearchPanel
