import React, { Component, PropTypes } from 'react'

const Inexperienced = ({inexperienced, toggleInexperienced}) => (
    <div>
      <label htmlFor="inexperienced">未経験</label>
      <input
        type="checkbox"
        name="inexperienced"
        id="inexperienced"
        checked={inexperienced}
        onChange={toggleInexperienced}
      />
    </div>
  )

Inexperienced.propTypes = {
  inexperienced: PropTypes.bool.isRequired,
  toggleInexperienced: PropTypes.func.isRequired
}

export default Inexperienced
