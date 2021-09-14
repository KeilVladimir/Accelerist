import React, { useState } from 'react';
import styled from 'styled-components';
import { TabButton } from '../../ui/TabButton';
import { AuthForm } from '../AuthForm';
import { AuthTitle } from '../../ui/AuthTitle';

const Auth: React.FC<{ isRegister: boolean }> = ({ isRegister }) => {
  const [isClick, setIsClick] = useState<boolean>(isRegister);

  const setClick = () => {
    setIsClick(!isClick);
  };

  return (
    <AuthBox>
      <ContentBox>
        <TitleBox>
          <AuthTitle>Welcome to Accelerist</AuthTitle>
        </TitleBox>
        <ButtonBox>
          <TabButton isClick={isClick} onClick={setClick}>
            Register
          </TabButton>
          <TabButton isClick={!isClick} onClick={setClick}>
            Log In
          </TabButton>
        </ButtonBox>
        <AuthForm isLogin={isClick} />
      </ContentBox>
    </AuthBox>
  );
};

const AuthBox = styled.div`
  width: 100%;
  max-width: 454px;
  height: 100%;
  max-height: 640px;
  background-color: #ffffff;
  border-radius: 6px;
  margin: 70px 15px 20px;
  @media only screen and (max-width: 587px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border: 1px black;
  padding: 2px 3.5px;
  align-items: center;
  border-radius: 6px;
`;

const ContentBox = styled.div`
  @media only screen and (max-width: 587px) {
    margin: 20px 16px;
  }
  margin: 40px;
  text-align: center;
`;

const TitleBox = styled.div`
  @media only screen and (max-width: 587px) {
    margin-bottom: 20px;
  }
  margin-bottom: 27px;
`;

export default Auth;
