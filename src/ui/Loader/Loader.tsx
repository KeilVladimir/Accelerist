import styled, { DefaultTheme, keyframes } from 'styled-components';
import React from 'react';

interface PropsLoader {
  theme: DefaultTheme;
}

export const Loader: React.FC<PropsLoader> = ({ theme }) => {
  return <LoaderStyled theme={theme} />;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyled = styled.div`
  ${(props) => props.theme}
  border-radius: 50%;
  -webkit-animation: ${rotate} 2s linear infinite;
  animation: ${rotate} 2s linear infinite;
`;

export default Loader;
