import styled from 'styled-components';

export const BasicNotification = styled.p`
  background: lightblue;
  padding: 5px;
  margin: 5px;
  color: black;
`;

export const SuccessNotification = styled(BasicNotification)`
  background: lightgreen;
`;

export const ErrorNotification = styled(BasicNotification)`
  background: lightcoral;
  font-weight: bold;
`;
