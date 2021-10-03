import React from 'react';
import styled from 'styled-components';

const AuthTitle: React.FC = ({ children }) => {
  return <AuthTitleStyled>{children}</AuthTitleStyled>;
};

const AuthTitleStyled = styled.h3`
  color: ${(props) => props.theme.text.bl};
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  margin: 0;
`;

export default AuthTitle;
