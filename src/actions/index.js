export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
})

export const addMessage = msg => ({
  type: 'ADD_MESSAGE',
  msg
})

export const clearMessage = msg => ({
  type: 'CLEAR_MESSAGE',
  msg
})
