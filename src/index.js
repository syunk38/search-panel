import React from 'react'
import ReactDOM from 'react-dom'
import SearchPanel from './components/search-panel'
import docReady from 'doc-ready'

const ready = () => {
  ReactDOM.render(<SearchPanel />, document.querySelector('#content'));
}

docReady(ready);
