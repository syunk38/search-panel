export const toggleInexperienced = () => {
  return {
    type: 'TOGGLE_INEXPERIENCED'
  }
}

export const selectSalary = (max, min) => {
  return {
    type: 'SELECT_SALARY',
    min,
    max
  }
}
