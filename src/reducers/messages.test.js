import { messages } from './messages';

describe('messages', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messages(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_MESSAGE', () => {
    const initialState = [];
    const action = {type: 'ADD_MESSAGE', msg: {message: 'msg', isUser: false}};
    const result = messages(initialState, action);
    const expectedState = [{message: 'msg', isUser: false}];

    expect(result).toEqual(expectedState);
  });

  it('should return the correct state if the action is CLEAR_MESSAGES', () => {
    const initialState = [];
    const action = {type: 'CLEAR_MESSAGES', msg: {message: 'msg', isUser: false}};
    const result = messages(initialState, action);
    const expectedState = [];

    expect(result).toEqual(expectedState);
  });
});
