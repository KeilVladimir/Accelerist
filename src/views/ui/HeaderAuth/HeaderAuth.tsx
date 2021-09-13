import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../icons/logo';

const HeaderAuth: React.FC = () => {
  return (
    <>
      <HeaderBox>
        <LogoIcon />
      </HeaderBox>
    </>
  );
};

const HeaderBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: #122434;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default HeaderAuth;
