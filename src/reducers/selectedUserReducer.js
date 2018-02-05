
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function selectedUserReducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_USER:
      return action.user
    default:
      return state
  }
}
