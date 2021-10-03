import React, { FC } from 'react';
import { components, OptionProps } from 'react-select';
import { Check } from '../../Check';
import styled from 'styled-components';
export const Option: FC<OptionProps<{ value: string }, boolean>> = ({
  ...outerProps
}) => {
  return (
    <components.Option {...outerProps}>
      <Wraper>
        <Label>{outerProps.children}</Label>
        <Check isCheck={outerProps.isSelected} />
      </Wraper>
    </components.Option>
  );
};
const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-right: 18px;
  padding-left: 18px;
`;

const Label = styled.p`
  font-size: 16px;
  margin-left: 10px;
  color: ${(props) => props.theme.text.bl};
`;

export default Option;
