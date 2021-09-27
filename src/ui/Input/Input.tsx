import React, { useState } from 'react';
import styled from 'styled-components';
import { EyeIcon } from '../icons/eye';
import { EyeOffIcon } from '../icons/eyeOff';
import { FieldRenderProps } from 'react-final-form';

export interface Input extends FieldRenderProps<string> {
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
  isError?: boolean;
}

const AuthInput: React.FC<Input> = ({
  meta,
  input,
  label,
  placeholder,
  isPassword,
}) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(false);

  const setHidden = () => {
    setIsHiddenPassword(!isHiddenPassword);
  };

  return (
    <>
      <InputBox>
        <Label>{label}</Label>
        <InputStyle
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          onChange={input.onChange}
          isError={meta.error && meta.touched}
          placeholder={placeholder}
          type={isPassword && !isHiddenPassword ? 'password' : 'text'}
        />
        {isPassword && (
          <EyeContainer onClick={setHidden}>
            {isHiddenPassword ? <EyeIcon /> : <EyeOffIcon />}
          </EyeContainer>
        )}
      </InputBox>
      {meta.error && meta.touched && <TextError>{meta.error}</TextError>}
    </>
  );
};

const InputStyle = styled.input<{ isError?: boolean }>`
  width: 100%;
  border-radius: 6px;
  height: 46px;
  border: 1px solid;
  border-color: ${(props) => (props.isError ? '#F05658' : '#E8E8E8')};
  margin: 0;
  padding-left: 16px;
  box-sizing: border-box;
  outline: none;
  :focus {
    border-color: #2baee0;
  }
`;

const InputBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: baseline;
`;

const Label = styled.label`
  font-size: 12px;
  color: #737373;
  margin-bottom: 4px;
`;

const TextError = styled.p`
  color: #f05658;
  text-align: initial;
  margin-top: 8px;
`;

const EyeContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 2%;
`;
export default AuthInput;
