const inexperienced = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_INEXPERIENCED':
      return !state
    default:
      return state;
  }
}

export default inexperienced
