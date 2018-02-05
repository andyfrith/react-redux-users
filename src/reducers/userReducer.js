import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
      return Object.assign([], state, action.users);

    case types.UPDATE_USER_SUCCESS:
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];

    case types.CREATE_USER_SUCCESS:
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];

    case types.DELETE_USER_SUCCESS:
      const newState = Object.assign([], state);
      newState.splice(state.findIndex(user => {return user.id === action.user.id}), 1);
      return newState;

    default:
      return state;
  }
}
