import React, { Component, PropTypes } from 'react'

const Salary = ({salary, selectSalary}) => {
  const {min, max} = salary
  return (
    <div>
      <select
        name="min-salary"
        value={ min }
        onChange={ e => {
          selectSalary(max, Number.parseInt(e.currentTarget.value))
        } }
      >
        <option>選択してください</option>
        { salaryOptions() }
      </select>
      <select
        name="max-salary"
        value={ max }
        onChange={ e => {
          selectSalary(Number.parseInt(e.currentTarget.value), min)
        } }
      >
        <option>選択してください</option>
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

Salary.propTypes = {
  salary: PropTypes.object.isRequired,
  selectSalary: PropTypes.func.isRequired
}


export default Salary
