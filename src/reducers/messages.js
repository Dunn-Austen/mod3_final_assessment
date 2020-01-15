export const messages = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.msg];
    case 'CLEAR_MESSAGES':
      return []
    default:
      return state;
  }
}
