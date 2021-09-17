import React, { useState } from 'react';
import { AuthForm } from './AuthForm';
import { AuthTitle } from 'ui/AuthTitle';
import styled from 'styled-components';

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
        <TabBox>
          <Tab
            backColor={isClick ? '#CAF0FF' : '#F8F8F8'}
            color={isClick ? '#122434' : '#737373'}
            onClick={setClick}>
            Register
          </Tab>
          <Tab
            backColor={!isClick ? '#CAF0FF' : '#F8F8F8'}
            color={!isClick ? '#122434' : '#737373'}
            onClick={setClick}>
            Log In
          </Tab>
        </TabBox>
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

const TabBox = styled.div`
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

const Tab = styled.button<{ backColor: string; color: string }>`
  background-color: ${(props) => props.backColor};
  border: none;
  border-radius: 6px;
  flex: 1;
  height: 36px;
  color: ${(props) => props.color};
`;
export default Auth;
