import { user } from './user';

describe('user', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = user(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is CREATE_USER', () => {
    const initialState = null;
    const action = {type: 'CREATE_USER', user: {
        id: 1,
        firstName: 'a',
        lastName: 'b',
        feeling: 'despondent'
      }};
    const result = user(initialState, action);
    const expectedState = {
        id: 1,
        firstName: 'a',
        lastName: 'b',
        feeling: 'despondent'
      };

    expect(result).toEqual(expectedState);
  });

  it('should return the correct state if the action is REMOVE_USER', () => {
    const initialState = {
            id: 1,
            firstName: 'a',
            lastName: 'b',
            feeling: 'despondent'
          };
    const action = {type: 'REMOVE_USER'};
    const result = user(initialState, action);
    const expectedState = null;

    expect(result).toEqual(expectedState);
  });
});
