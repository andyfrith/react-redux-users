import styled from 'styled-components';

export const Address = styled.div`
  font-size: 1em;
  text-align: center;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.span`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.text.name.color};
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const User = styled.div``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Action = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 10px 20px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CancelAction = styled(Action)`
  background-image: linear-gradient(to top left, #f78ca0 0%, #fe9a8b 100%);
  color: #ffffff;
`;

export const AcceptAccion = styled(Action)`
  background-image: linear-gradient(to top left, #4facfe 0%, #00f2fe 100%);
  color: #ffffff;
`;
