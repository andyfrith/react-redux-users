class UsersAPI {

  static getAllUsers() {
    return fetch('./data/users.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  };
}

export default UsersAPI;
