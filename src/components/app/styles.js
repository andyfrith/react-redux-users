import styled from 'styled-components';

export const Main = styled.main`
  background-color: rgba(250, 215, 215, 0.5);
  border-radius: 50px;
  margin: 50px;
  padding: 50px;
`;

export const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export const altTheme = {
  bg: {
    primary: 'silver',
    primaryAlt: 'red',
  },
  button: {
    background: 'purple',
    border: '2px solid purple',
    color: 'purple',
  },
  text: {
    name: {
      color: 'purple',
      size: '1.5em',
    },
    firstName: {
      color: 'purple',
      size: '1.5em',
    },
    lastName: {
      color: 'purple',
      size: '1.5em',
    },
    username: {
      color: 'purple',
      size: '1.5em',
    },
    password: {
      color: 'purple',
      size: '1.5em',
    },
    address: {
      color: 'black',
      size: '1em',
    },
    title: {
      color: 'black',
    },
    label: {
      color: 'black',
    },
    value: {
      color: 'black',
    },
    date: {
      label: {
        color: 'black',
      },
    },
  },
};

// styledComponentsTheme
export const theme = {
  bg: {
    primary: 'silver',
    primaryAlt: 'red',
  },
  button: {
    background: 'palevioletred',
    border: '2px solid palevioletred',
    color: 'palevioletred',
  },
  text: {
    name: {
      color: 'palevioletred', // rgba(189, 58, 101, 1);
      size: '1.5em',
    },
    firstName: {
      color: 'palevioletred',
      size: '1.5em',
    },
    lastName: {
      color: 'palevioletred',
      size: '1.5em',
    },
    username: {
      color: 'palevioletred',
      size: '1.5em',
    },
    password: {
      color: 'palevioletred',
      size: '1.5em',
    },
    address: {
      color: 'black',
      size: '1em',
    },
    title: {
      color: 'black',
    },
    label: {
      color: 'black',
    },
    value: {
      color: 'black',
    },
    date: {
      label: {
        color: 'black',
      },
    },
  },
};
