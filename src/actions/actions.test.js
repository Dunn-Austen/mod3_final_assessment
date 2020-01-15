import * as actions from '../actions';

describe('actions', () => {
  it ('should have a type of ADD_MESSAGE', () => {
  const msg = [{message: 'a', isUser: true}];
  const expectedAction = {
    type: 'ADD_MESSAGE',
    msg: [{message: 'a', isUser: true}]
  };

  const result = actions.addMessage(msg);

  expect(result).toEqual(expectedAction);
  });

  it ('should have a type of CREATE_USER', () => {
  const user = {
      id: 1,
      firstName: 'a',
      lastName: 'b',
      feeling: 'despondent'
    };
  const expectedAction = {
    type: 'CREATE_USER',
    user: {
        id: 1,
        firstName: 'a',
        lastName: 'b',
        feeling: 'despondent'
      }
  };

  const result = actions.createUser(user);

  expect(result).toEqual(expectedAction);
  });

  it ('should have a type of REMOVE_USER', () => {
  const user = {
      id: 1,
      firstName: 'a',
      lastName: 'b',
      feeling: 'despondent'
    };
  const expectedAction = {
    type: 'REMOVE_USER',
  };

  const result = actions.removeUser(user);

  expect(result).toEqual(expectedAction);
  });

  it ('should have a type of HAS_ERRORED', () => {
  const errorMsg = 'error';
  const expectedAction = {
    type: 'HAS_ERRORED',
    errorMsg: 'error'
  };

  const result = actions.hasErrored(errorMsg);

  expect(result).toEqual(expectedAction);
  });

  it ('should have a type of CLEAR_MESSAGES', () => {
  const msg = [];
  const expectedAction = {
    type: 'CLEAR_MESSAGES',
    msg: []
  };

  const result = actions.clearMessages(msg);

  expect(result).toEqual(expectedAction);
  });

});
