import React from 'react';
import styled from 'styled-components';
import background from 'assets/img/homedark.png';
import { HeaderAuth } from 'pages/Auth/HeaderAuth';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <>
      <HeaderAuth />
      <Contents>{children}</Contents>
    </>
  );
};

const Contents = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  border: 1px black;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export default AuthLayout;
