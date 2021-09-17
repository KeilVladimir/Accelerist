import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { Input } from 'ui/Input';
import { required } from 'helpers/validate';
import { Button } from 'ui/Button';
import { AuthTitle } from 'ui/AuthTitle';
import { theme } from 'ui/Button/themes';

const NewPassword: React.FC = () => {
  const onSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <NewPasswordBox>
      <AuthTitle>New Password</AuthTitle>
      <ContentText>Сome up with a new password</ContentText>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          password: '',
        }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <Field
              name="password"
              component={Input}
              placeholder={'Password'}
              label={'Password'}
              validate={required}
              isPassword={true}
            />
            <ButtonBox>
              <Button
                disable={hasValidationErrors}
                onClick={handleSubmit}
                theme={theme.Primary}>
                Done
              </Button>
            </ButtonBox>
          </>
        )}
      />
    </NewPasswordBox>
  );
};

const NewPasswordBox = styled.div`
  @media only screen and (max-width: 587px) {
    max-width: 343px;
    padding: 16px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  max-width: 454px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  padding: 40px;
  margin-top: 72px;
  width: 100%;
  height: 100%;
  margin-right: 15px;
  margin-left: 15px;
`;
const ContentText = styled.p`
  font-size: 16px;
  color: #122434;
  margin-bottom: 30px;
  line-height: 155%;
`;

const ButtonBox = styled.div`
  margin-top: 40px;
  @media only screen and (max-width: 587px) {
    margin-top: 32px;
  }
`;
export default NewPassword;
