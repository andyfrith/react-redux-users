import React from 'react';
import UsersContainer from '../../containers/users/';
import { Title } from '../common/page/styles';
import { Wrapper } from '../common/page/styles';

class UsersPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Users</Title>
        <UsersContainer />
      </Wrapper>
    );
  }
}

export default UsersPage;
