import React, { Component, PropTypes } from 'react'

const Keyword = ({keyword, typeKeyword}) => (
    <div>
      <label htmlFor="keyword">キーワード</label>
      <textarea name="keyword" value={ keyword } placeholder="キーワードを入力" onChange={ e => { typeKeyword(e.currentTarget.value); } } />
    </div>
  )

Keyword.propTypes = {
  keyword: PropTypes.string.isRequired,
  typeKeyword: PropTypes.func.isRequired
}

export default Keyword
