import React from 'react';
import styled from 'styled-components';
import { AuthInput } from 'types';

const SearchInput: React.FC<AuthInput> = ({ input, placeholder }) => {
  return <Input placeholder={placeholder} onChange={input.onChange} />;
};

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
