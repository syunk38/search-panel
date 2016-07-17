const searchConditions = (state = {inexperienced: false}, action) => {
  switch (action.type) {
    case 'TOGGEL_INEXPERIENCED':
      state.inexperienced = !state.inexperienced
      console.log(state)
      return state;
    default:
      return state;
  }
}

export default searchConditions
