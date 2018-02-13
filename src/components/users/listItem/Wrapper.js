import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 100%;
  // height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  // border-top: 1px solid #eee;
  &:first-child {
    border-top: none;
  }
`;
