import styled, { DefaultTheme } from 'styled-components';
import React from 'react';

interface PropsLoader {
  theme: DefaultTheme;
}

export const Loader: React.FC<PropsLoader> = ({ theme }) => {
  return <LoaderStyled theme={theme} />;
};
const LoaderStyled = styled.div`
  ${(props) => props.theme}
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
