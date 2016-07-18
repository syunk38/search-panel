const defaultState = {
  inexperienced: false,
  salary: {
    min: 200,
    max: 400
  }
}

const searchConditions = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_INEXPERIENCED':
      state.inexperienced = !state.inexperienced
      return Object.assign({}, state)
    case 'SELECT_SALARY':
      state.salary.max = action.max
      state.salary.min = action.min
      return Object.assign({}, state)
    default:
      return state;
  }
}

export default searchConditions
