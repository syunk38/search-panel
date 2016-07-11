import React, { Component } from 'react'
import InexperiencedCheckBox from './inexperienced.js'

export default class SearchPanel extends Component{
  render(){
    return (
      <div className="search-panel">
        <h1>検索</h1>
        <form>
          <InexperiencedCheckBox />
        </form>
      </div>
    )
  }
}
