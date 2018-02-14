import React from 'react';
import UsersContainer from '../../containers/users/';
import { Wrapper } from '../common/page/styles';

class UsersPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <UsersContainer />
      </Wrapper>
    );
  }
}

export default UsersPage;
