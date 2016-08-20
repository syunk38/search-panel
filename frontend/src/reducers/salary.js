const defaultState = { min: '', max: '' }

const salary = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_SALARY':
      state.max = action.max
      state.min = action.min
      return Object.assign({}, state);
    default:
      return state;
  }
}

export default salary
