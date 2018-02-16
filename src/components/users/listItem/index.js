/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';
import { Button } from '../../common/form/styles';
import { User } from '../../common/styles';
import { Name } from '../../common/styles';
import { Address } from '../../common/styles';

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
      <Button primary>Edit</Button>
    </Link>
    <Link onClick={onDeleteUserClick} to="/users">
      <Button primary>Delete</Button>
    </Link>
  </Wrapper>
);

UserListItem.propTypes = {
  onEditUserClick: PropTypes.func.isRequired,
  onDeleteUserClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default UserListItem;
