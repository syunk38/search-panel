import React, { Component, PropTypes } from 'react'

const SalarySelectBox = ({min, max, selectSalary}) => {
  return (
    <div>
      <select
        name="min-salary"
        value={ min }
        onChange={ e => {
          selectSalary(max, Number.parseInt(e.currentTarget.value))
        } }
      >
        { salaryOptions() }
      </select>
      <select
        name="max-salary"
        value={ max }
        onChange={ e => {
          selectSalary(Number.parseInt(e.currentTarget.value), min)
        } }
      >
        { salaryOptions() }
      </select>
    </div>
  )
}

const salaryOptions = () => {
  return [200,300,400,500,600,700,800,900,1000].map((salary, index) => {
    return (
      <option key={ index } value={ salary }>
        { salary }万円
      </option>
    )
  })
}

SalarySelectBox.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}


export default SalarySelectBox
