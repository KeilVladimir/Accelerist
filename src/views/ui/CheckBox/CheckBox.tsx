import React, { useState } from 'react';
import styled from 'styled-components';
import { CheckIcon } from '../icons/check';

const CheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const setCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBoxContainer check={isChecked} onClick={setCheck}>
      {isChecked && <CheckIcon />}
    </CheckBoxContainer>
  );
};

const CheckBoxContainer = styled.div<{ check: boolean }>`
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

export default CheckBox;
