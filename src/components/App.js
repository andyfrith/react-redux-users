import React from "react";
import { Route } from "react-router-dom";
import Header from "./common/Header";
import UserPage from "./users/UserPage";
import UsersPage from "./users/UsersPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="ui main text container">
          <Route path="/" exact component={UsersPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/user/:id" exact component={UserPage} />
          <Route path="/user" exact component={UserPage} />
        </main>
      </div>
    );
  }
}

export default App;
