import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/form/TextInput';
import { Button, Form } from '../../common/form/styles';

class UserForm extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      user: {
        id: 0,
        firstName: '',
        lastName: '',
        address: '',
        active: true,
      },
    };

    if (
      props.isEditing &&
      props.selectedUser &&
      props.selectedUser.firstName !== ''
    ) {
      this.state = {
        user: {
          id: props.selectedUser.id,
          firstName: props.selectedUser.firstName,
          lastName: props.selectedUser.lastName,
          address: props.selectedUser.address,
          active: props.selectedUser.active,
        },
      };
    }

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange( event ) {
    const field = event.target.name;
    const [ user ] = [ this.state.user ];
    user[ field ] = event.target.value;
    return this.setState( { user } );
  }

  handleSubmit( event ) {
    event.preventDefault();
    if (
      ( this.state.user.firstName || this.state.user.firstName.length !== 0 ) &&
      ( this.state.user.lastName || this.state.user.lastName.length !== 0 ) &&
      ( this.state.user.address || this.state.user.address.length !== 0 )
    ) {
      this.props.createUser(
        this.state.user.id,
        this.state.user.firstName,
        this.state.user.lastName,
        this.state.user.address,
        this.state.user.active,
      );

      const user = {
        id: 0,
        firstName: '',
        lastName: '',
        address: '',
        active: true,
      };
      this.setState( { user } );
      // alert( 'User info submitted' );
    } else {
      // alert( 'All fields are required' );
    }
  }

  render() {
    return (
      <div>
        <Form>
          <TextInput
            name="firstName"
            placeholder="First Name"
            value={this.state.user.firstName}
            onChange={this.handleChange}
          />

          <TextInput
            name="lastName"
            placeholder="Last Name"
            value={this.state.user.lastName}
            onChange={this.handleChange}
          />

          <TextInput
            name="address"
            placeholder="Hometown"
            value={this.state.user.address}
            onChange={this.handleChange}
          />

          <Button
            primary
            type="submit"
            value="Save"
            onClick={this.handleSubmit}
          >
            Save This Diva
          </Button>
        </Form>
      </div>
    );
  }
}

UserForm.defaultProps = {
  selectedUser: null,
};

UserForm.propTypes = {
  selectedUser: PropTypes.object,
  isEditing: PropTypes.bool.isRequired,
  createUser: PropTypes.func.isRequired,
};

export default UserForm;
