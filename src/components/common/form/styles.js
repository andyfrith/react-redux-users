import styled, { css } from 'styled-components';

export const Button = styled.button`
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  padding: 0.25em 1em;
  margin: 0.5em 1em;
  background: transparent;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: palevioletred;
  border: 2px solid palevioletred;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
