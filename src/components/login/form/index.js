import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from '../../common/form/styles';

class LoginForm extends React.Component {
  handleClick = ( e ) => {
    e.preventDefault();
    const username = this.refs.username;
    const password = this.refs.password;

    const creds = {
      username: username.value.trim(),
      password: password.value.trim(),
    };
    // console.log('creds', creds);
    this.props.onLogin( creds );
  };

  render() {
    return (
      <Form>
        <div>
          <input
            className="usernam"
            name="username"
            type="text"
            label="Username"
            placeholder="Username"
            ref="username"
          />
        </div>
        <div>
          <input
            className="password"
            name="password"
            type="password"
            ref="password"
            label="Password"
            placeholder="Password"
          />
        </div>
        <Button primary value="Login" onClick={this.handleClick}>
          Login
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default LoginForm;
