import { FC, useState } from 'react';
import { AuthTitle } from 'ui/AuthTitle';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { Input } from 'ui/Input';
import { validateEmail } from 'helpers/validate';
import { Button } from 'ui/Button';
import { Link } from 'react-router-dom';
import { theme } from 'ui/Button/themes';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmailAction } from 'store/ducks/session/actions';
import { getTimer } from 'store/ducks/session/selectors';
import { Timer } from 'ui/Timer';

const Reset: FC = () => {
  const [isLinked, setIsLinked] = useState<boolean>(false);
  const [mail, setMail] = useState<{ email: string }>({ email: '' });

  const dispatch = useDispatch();

  const isTimer = useSelector(getTimer);

  const resent = () => {
    dispatch(sendEmailAction(mail));
  };

  const onSubmit = (values: { email: string }) => {
    setIsLinked(!isLinked);
    setMail(values);
    resent();
  };

  return (
    <ContainerReset>
      <ResetBox>
        <AuthTitle>Password Reset</AuthTitle>
        <ContentText>
          {isLinked
            ? 'A link was sent to your email to confirm password reset and create a new one'
            : 'Enter your email to receive instructions on how to reset your password.'}
        </ContentText>
        {isLinked ? (
          <Button theme={theme.Primary} disable={isTimer} onClick={resent}>
            {isTimer ? <Timer /> : 'Resent'}
          </Button>
        ) : (
          <Form
            onSubmit={onSubmit}
            initialValues={{
              email: '',
            }}
            render={({ handleSubmit, hasValidationErrors }) => (
              <>
                <Field
                  name="email"
                  component={Input}
                  placeholder={'Email'}
                  isPassword={false}
                  label={'Email'}
                  validate={validateEmail}
                />
                <ButtonBox>
                  <Button
                    disable={hasValidationErrors}
                    theme={theme.Primary}
                    onClick={handleSubmit}>
                    {'Reset'}
                  </Button>
                </ButtonBox>
              </>
            )}
          />
        )}
      </ResetBox>
      <ButtonOpacityBox>
        <LinkStyled to="/">
          <Button theme={theme.Opacity}>Return to Login</Button>
        </LinkStyled>
      </ButtonOpacityBox>
      {isLinked && <Button theme={theme.Opacity}>Contact to support</Button>}
    </ContainerReset>
  );
};

const ContainerReset = styled.div`
  @media only screen and (max-width: 587px) {
    margin-top: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin-left: 15px;
  margin-top: 72px;
  margin-right: 15px;
`;

const ResetBox = styled.div`
  max-width: 454px;
  background: ${(props) => props.theme.background.wh};
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
const ButtonOpacityBox = styled.div`
  position: absolute;
  bottom: 27px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
export default Reset;
