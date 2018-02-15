import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: transparent;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: ${(props) => props.theme.button.border};
  border-radius: 3px;
  color: ${(props) => props.theme.button.color};
  cursor: pointer;
  margin: 0.5em 1em;
  outline: none;
  padding: 0.25em 1em;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.theme.button.background};
      color: white;
    `};
`;

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  padding: 0.1em;
  margin: 0.1em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  color: ${(props) => props.theme.text[props.name].color};
  font-size: ${(props) => props.theme.text[props.name].size};
  text-align: center;
  width: 15em;

  &.firstName, &.lastName {
    ::-webkit-input-placeholder {
      /* Chrome */
      color: ${(props) => props.theme.text.firstName.color};
      opacity: 0.6;
      / * palevioletred; */
    }

    :-ms-input-placeholder {
      /* IE 10+ */
      color: ${(props) => props.theme.text.firstName.color};
      opacity: 0.6;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: ${(props) => props.theme.text.firstName.color};
      opacity: 0.6;
    }

    :-moz-placeholder {
      /* Firefox 4 - 18 */
      color: ${(props) => props.theme.text.firstName.color};
      opacity: 0.6;
    }
  }

  &.address {
    ::-webkit-input-placeholder {
      /* Chrome */
      color: ${(props) => props.theme.text.address.color};
      opacity: 0.6;
    }

    :-ms-input-placeholder {
      /* IE 10+ */
      color: ${(props) => props.theme.text.address.color};
      opacity: 0.6;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: ${(props) => props.theme.text.address.color};
      opacity: 0.6;
    }

    :-moz-placeholder {
      /* Firefox 4 - 18 */
      color: ${(props) => props.theme.text.address.color};
      opacity: 0.6;
    }
  }
`;

export const Label = styled.label`
  font-size: 1em;
  text-align: center;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;
