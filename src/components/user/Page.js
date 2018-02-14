import React from 'react';
import UserContainer from '../../containers/user/';
import { Wrapper } from '../common/page/styles';

const UserPage = ({ match }) => (
  <Wrapper>
    <UserContainer isEditing={match.params.id ? true : false} />
  </Wrapper>
);

export default UserPage;
