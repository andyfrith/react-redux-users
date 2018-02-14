import React from 'react';
import UserContainer from '../../containers/user/';
import { Title } from '../common/page/styles';
import { Wrapper } from '../common/page/styles';

const UserPage = ({ match }) => (
  <Wrapper>
    <Title>User</Title>
    <UserContainer isEditing={match.params.id ? true : false} />
  </Wrapper>
);

export default UserPage;
