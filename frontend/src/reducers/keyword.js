const keyword = (state = '', action) => {
  switch (action.type) {
    case 'TYPE_KEYWORD':
      state = action.keyword;
      return state;
    default:
      return state;
  }
};

export default keyword
