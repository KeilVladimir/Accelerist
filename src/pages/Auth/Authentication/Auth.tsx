import { FC, useState } from 'react';
import { AuthForm } from './components/AuthForm';
import { AuthTitle } from 'ui/AuthTitle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorIn, getErrorUp } from 'store/ducks/session/selectors';
import { setErrorSignIn, setErrorSignUp } from 'store/ducks/session/actions';

const Auth: FC<{ isRegister: boolean }> = ({ isRegister }) => {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState<boolean>(isRegister);
  const isErrorIn = useSelector(getErrorIn);
  const isErrorUp = useSelector(getErrorUp);

  const setClick = () => {
    setIsClick(!isClick);
    dispatch(setErrorSignIn(false));
    dispatch(setErrorSignUp(false));
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
        {isErrorIn && (
          <ErrorMessage>Ошибка авторизации. Проверьте данные</ErrorMessage>
        )}
        {isErrorUp && (
          <ErrorMessage>
            Ошибка регистрации. Такой пользователь уже сущесвтует
          </ErrorMessage>
        )}
      </ContentBox>
    </AuthBox>
  );
};
const AuthBox = styled.div`
  width: 100%;
  max-width: 454px;
  height: 100%;
  max-height: 640px;
  background-color: ${(props) => props.theme.background.wh};
  border-radius: 6px;
  margin: 70px 15px 20px;
  @media only screen and (max-width: 587px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const TabBox = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background.white};
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

const ErrorMessage = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.red};
`;
export default Auth;
