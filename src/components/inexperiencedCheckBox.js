import React, { Component, PropTypes } from 'react'

const InexperiencedCheckBox = ({inexperienced, toggleInexperienced}) => (
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

InexperiencedCheckBox.propTypes = {
  inexperienced: PropTypes.bool.isRequired,
  toggleInexperienced: PropTypes.func.isRequired
}

export default InexperiencedCheckBox
