import React, { useState } from 'react';
import { AuthTitle } from '../../ui/AuthTitle';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { AuthInput } from '../../ui/AuthInput';
import { validateEmail } from '../../../helpers/validate';
import { Button } from '../../ui/Button';
import { ButtonOpacity } from '../../ui/ButtonOpacity';
import { AuthRoute } from '../../../types';

interface PropsReset {
  setRender: (value: string) => void;
}

const Reset: React.FC<PropsReset> = ({ setRender }) => {
  const [isLinked, setIsLinked] = useState<boolean>(false);

  const onSubmit = (values: string) => {
    setIsLinked(!isLinked);
  };

  const linkToNewPassword = () => {
    setRender(AuthRoute.NEW_PASSWORD);
  };

  return (
    <>
      <ResetBox>
        <AuthTitle>Password Reset</AuthTitle>
        <ContentText>
          {isLinked
            ? 'A link was sent to your email to confirm password reset and create a new one'
            : 'Enter your email to receive instructions on how to reset your password.'}
        </ContentText>
        {isLinked ? (
          <Button onClick={linkToNewPassword}>Resent</Button>
        ) : (
          <Form
            onSubmit={onSubmit}
            initialValues={{
              login: '',
            }}
            render={({ handleSubmit, hasValidationErrors }) => (
              <>
                <Field
                  name="login"
                  component={AuthInput}
                  placeholder={'Email'}
                  isPassword={false}
                  label={'Email'}
                  validate={validateEmail}
                />
                <ButtonBox>
                  <Button disable={hasValidationErrors} onClick={handleSubmit}>
                    Reset
                  </Button>
                </ButtonBox>
              </>
            )}
          />
        )}
      </ResetBox>
      {isLinked && <ButtonOpacity>Contact to support</ButtonOpacity>}
    </>
  );
};

const ResetBox = styled.div`
  max-width: 454px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  padding: 40px;
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
export default Reset;
