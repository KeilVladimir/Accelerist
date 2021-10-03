import React from 'react';
import 'index.css';
import styled from 'styled-components';
import { CheckIcon } from '../icons/check';
import { FieldRenderProps } from 'react-final-form';

const CheckBox: React.FC<FieldRenderProps<string>> = ({ input }) => {
  return (
    <Box
      onClick={() => {
        input.onChange(!input.checked);
      }}>
      <Input type={'checkbox'} {...input} />
      <CheckBoxContainer check={input.checked}>
        {input.checked && <CheckIcon />}
      </CheckBoxContainer>
    </Box>
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
const Box = styled.div`
  position: relative;
`;
const Input = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;
export default CheckBox;
