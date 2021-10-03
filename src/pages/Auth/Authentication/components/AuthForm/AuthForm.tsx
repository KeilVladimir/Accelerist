import { FC, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from 'ui/Input';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { validateEmail } from 'helpers/validate';
import { SocialIcon } from 'ui/icons/social';
import { CheckBox } from 'ui/CheckBox';
import { required } from 'helpers/validate';
import { Button } from 'ui/Button';
import { Link } from 'react-router-dom';
import { signInFetch, signUpFetch } from 'store/ducks/session/actions';
import { theme } from 'ui/Button/themes';
import { themes as themeLoader } from 'ui/Loader/themes';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getLoader, getToken } from 'store/ducks/session/selectors';
import { Loader } from 'ui/Loader';

interface AuthFormProps {
  isLogin?: boolean;
  setRender?: (value: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({ isLogin }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isLoader = useSelector(getLoader);

  useEffect(() => {
    if (token !== '') {
      history.push('/Dashboard');
    }
  }, [token]);

  const onSubmit = (values: { email: string; password: string }) => {
    if (!isLogin) {
      dispatch(signInFetch(values));
    } else {
      dispatch(signUpFetch(values));
    }
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          email: '',
          password: '',
        }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <FieldBox>
              <LoginBox>
                <Field
                  name="email"
                  component={Input}
                  placeholder={'Email'}
                  isPassword={false}
                  label={'Email'}
                  isError={hasValidationErrors}
                  validate={validateEmail}
                />
              </LoginBox>
              <div>
                <Field
                  name="password"
                  component={Input}
                  placeholder={'Password'}
                  label={'Password'}
                  validate={required}
                  isError={hasValidationErrors}
                  isPassword={true}
                />
              </div>
            </FieldBox>
            {isLogin ? (
              <RulesBox>
                <RulesText>
                  I agree that by clicking <RulesLink>“Registration”</RulesLink>{' '}
                  I accept the <RulesLink> Terms Of Service</RulesLink> and{' '}
                  <RulesLink>Privacy Policy</RulesLink>
                </RulesText>
              </RulesBox>
            ) : (
              <PasswordSettings>
                <CheckContainer>
                  <Field name={'bool'} component={CheckBox} type={'checkbox'} />
                  <CheckText>Remember</CheckText>
                </CheckContainer>
                <ForgotLink to={'/auth/reset'}>Forgot Password?</ForgotLink>
              </PasswordSettings>
            )}
            <LinkToBoard to={token && '/Dashboard'}>
              <Button
                onClick={handleSubmit}
                disable={hasValidationErrors}
                theme={theme.Primary}>
                {isLoader ? (
                  <Loader theme={themeLoader.primary} />
                ) : isLogin ? (
                  'Register'
                ) : (
                  'Login'
                )}
              </Button>
            </LinkToBoard>
            `<ContinueText>or continue with</ContinueText>
            <SocialLink>
              <SocialIcon />
            </SocialLink>
          </>
        )}
      />
    </>
  );
};

const FieldBox = styled.div`
  margin-top: 32px;
  @media only screen and (max-width: 587px) {
    margin-top: 22px;
  }
  margin-bottom: 16px;
`;

const RulesBox = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
`;

const LinkToBoard = styled(Link)`
  text-decoration: none;
`;

const RulesText = styled.p`
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.text.gr};
  box-sizing: border-box;
`;

const ForgotLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: ${(props) => props.theme.text.gr};
  cursor: pointer;
`;

const RulesLink = styled.a`
  color: ${(props) => props.theme.text.bl};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
`;

const ContinueText = styled.p`
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.text.gr};
  margin-top: 32px;
  @media only screen and (max-width: 587px) {
    margin-top: 16px;
    margin-bottom: 26px;
  }
  margin-bottom: 34px;
`;

const SocialLink = styled.a`
  @media only screen and (max-width: 587px) {
    margin-bottom: 30px;
  }
  margin-bottom: 40px;
  cursor: pointer;
`;

const LoginBox = styled.div`
  margin-bottom: 24px;
  @media only screen and (max-width: 587px) {
    margin-bottom: 20px;
  }
`;

const PasswordSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 62px;
  @media only screen and (max-width: 587px) {
    margin-bottom: 50px;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckText = styled.p`
  margin-left: 11px;
  color: ${(props) => props.theme.text.bl};
  font-size: 12px;
`;

export default AuthForm;
