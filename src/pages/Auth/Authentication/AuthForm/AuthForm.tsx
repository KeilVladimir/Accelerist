import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from 'ui/Input';
import styled from 'styled-components';
import { validateEmail } from 'helpers/validate';
import { SocialIcon } from 'ui/icons/social';
import { CheckBox } from 'ui/CheckBox';
import { required } from '../../../../helpers/validate';
import { Button } from 'ui/Button';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../../../types';
import { theme } from 'ui/Button/themes';

interface FormState {
  login?: string;
  password: string;
  bool?: boolean;
}

interface AuthFormProps {
  isLogin?: boolean;
  setRender?: (value: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const onSubmit = (values: FormState) => {
    console.log(values);
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          login: '',
          password: '',
        }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <FieldBox>
              <LoginBox>
                <Field
                  name="login"
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
                <ForgotLink to={'/' + AuthRoute.reset}>
                  Forgot Password?
                </ForgotLink>
              </PasswordSettings>
            )}
            <Button
              onClick={handleSubmit}
              disable={hasValidationErrors}
              theme={theme.Primary}>
              {!isLogin ? 'Login' : 'Register'}
            </Button>
            <ContinueText>or continue with</ContinueText>
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

const RulesText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #737373;
  box-sizing: border-box;
`;

const ForgotLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #737373;
  cursor: pointer;
`;

const RulesLink = styled.a`
  color: #122434;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
`;

const ContinueText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #737373;
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
  color: #122434;
  font-size: 12px;
`;

export default AuthForm;
