/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';
import { Button } from '../../common/form/Button';
import { User } from '../../common/User';
import { Name } from '../../common/Name';
import { Address } from '../../common/Address';

const UserListItem = ({
  onEditUserClick,
  onDeleteUserClick,
  id,
  firstName,
  lastName,
  address
}) => (
  <Wrapper>
    <User>
      <Name>
        {firstName} {lastName}
      </Name>
      <Address>{address}</Address>
    </User>
    <Link onClick={onEditUserClick} to={'/user/ ' + id}>
      <Button>Edit</Button>
    </Link>
    <Link onClick={onDeleteUserClick} to="/users">
      <Button>Delete</Button>
    </Link>
  </Wrapper>
);

UserListItem.propTypes = {
  onEditUserClick: PropTypes.func.isRequired,
  onDeleteUserClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default UserListItem;
