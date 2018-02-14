import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../header/';
import UserPage from '../user/Page';
import UsersPage from '../users/Page';
import { Main, Wrapper } from './styles';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Route path="/" exact component={UsersPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/user/:id" exact component={UserPage} />
          <Route path="/user" exact component={UserPage} />
        </Main>
      </Wrapper>
    );
  }
}

export default App;
