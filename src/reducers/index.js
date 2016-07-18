const searchConditions = (state = {inexperienced: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_INEXPERIENCED':
      return Object.assign({}, state, {
        inexperienced: !state.inexperienced
      })
    default:
      return state;
  }
}

export default searchConditions
