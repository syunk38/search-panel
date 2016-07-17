import React, { Component, PropTypes } from 'react'

const InexperiencedCheckBox = ({inexperienced, onInexperiencedChange}) => {
  return (
    <div>
      <label htmlFor="inexperienced">未経験</label>
      <input
        type="checkbox"
        name="inexperienced"
        id="inexperienced"
        checked={inexperienced}
        onChange={onInexperiencedChange}
      />
    </div>
  );
}

InexperiencedCheckBox.propTypes = {
  inexperienced: PropTypes.bool.isRequired,
  onInexperiencedChange: PropTypes.func.isRequired
}

export default InexperiencedCheckBox
