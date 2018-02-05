import * as types from './actionTypes';
import usersAPI from '../api/UsersAPI';

let nextUserId = 4;

export const loadUsersSuccess = users => ({
  type: types.LOAD_USERS_SUCCESS, users
});

export const deleteUserSuccess = user => ({
  type: types.DELETE_USER_SUCCESS, user
});

export const updateUserSuccess = user => ({
  type: types.UPDATE_USER_SUCCESS, user
});

export const createUserSuccess = user => ({
  type: types.CREATE_USER_SUCCESS, user
});

export const selectUser = user => ({
  type: types.SELECT_USER, user
});

export function loadUsers() {
  return function(dispatch) {
    return usersAPI.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateUser(user) {
  return function(dispatch) {
    dispatch(updateUserSuccess(user));
  }
}

export function createUser(id, firstName, lastName, address, active) {
  const user = {
    id: (id && id !== 0) ? id : nextUserId++,
    firstName,
    lastName,
    address,
    active: true,
  };

  return function (dispatch) {
    dispatch(createUserSuccess(user));
  };
}

export function deleteUser(user) {
  return function(dispatch) {
    dispatch(deleteUserSuccess(user));
  }
}
