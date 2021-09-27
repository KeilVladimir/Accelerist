import React from 'react';
import styled from 'styled-components';

import { FieldRenderProps } from 'react-final-form';
export interface SearchInput extends FieldRenderProps<string> {
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
  isError?: boolean;
}

const SearchInput: React.FC<SearchInput> = ({ input, placeholder }) => {
  return <Input placeholder={placeholder} onChange={input.onChange} />;
};

//этот компонент уберу как буду менюшкой заниматься, инпут будет один на весь проект
const Input = styled.input`
  height: auto;
  flex: 1;
  box-sizing: border-box;
  min-width: 60px;
  padding-top: 9px;
  padding-bottom: 9px;
  border: none;
  outline: none;
  ::placeholder {
    font-size: 12px;
    line-height: 150%;
    color: #737373;
  }
`;

export default SearchInput;
