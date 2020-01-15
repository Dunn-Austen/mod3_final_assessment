export const messages = (state='', action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.msg
    case 'CLEAR_MESSAGES':
      return action.msg
    default:
      return state;
  }
}
