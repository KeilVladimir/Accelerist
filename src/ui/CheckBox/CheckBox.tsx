import React from 'react';
import styled from 'styled-components';
import { CheckIcon } from '../icons/check';
import { FieldRenderProps } from 'react-final-form';

const CheckBox: React.FC<FieldRenderProps<string>> = ({ input }) => {
  return (
    <>
      <Input {...input} type={'checkbox'} />
      <CheckBoxContainer check={input.checked}>
        {input.checked && <CheckIcon />}
      </CheckBoxContainer>
    </>
  );
};

const CheckBoxContainer = styled.div<{ check?: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.check ? 'none' : '1px solid #e8e8e8')};
  box-sizing: border-box;
  border-radius: 3px;
  background-color: ${(props) => (props.check ? '#CAF0FF' : '#FFFFFF')};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
export default CheckBox;
