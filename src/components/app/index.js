import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../header/';
import UserPage from '../user/Page';
import UsersPage from '../users/Page';
import LoginPage from '../login/Page';
import { Main, theme, Wrapper } from './styles';
import ProtectedRoute from './ProtectedRoute';

const App = ( { isAuthenticated } ) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <Main>
        <ProtectedRoute path="/" exact component={UsersPage} isAuthenticated={isAuthenticated} />
        <ProtectedRoute
          path="/users"
          exact
          component={UsersPage}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          path="/user/:id"
          exact
          component={UserPage}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute path="/user" exact component={UserPage} isAuthenticated={isAuthenticated} />
        <Route path="/login" exact component={LoginPage} />
      </Main>
    </Wrapper>
  </ThemeProvider>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ( {
  isAuthenticated: state.authentication.isAuthenticated,
} );

export default withRouter( connect( mapStateToProps )( App ) );
