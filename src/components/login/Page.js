import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from '../../containers/login/';
import { Wrapper } from '../common/page/styles';

const LoginPage = ( { match } ) => (
  <Wrapper>
    <LoginContainer isEditing={!!match.params.id} />
  </Wrapper>
);

LoginPage.propTypes = {
  match: PropTypes.array.isRequired,
};

export default LoginPage;
