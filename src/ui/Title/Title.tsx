import React from 'react';
import styled from 'styled-components';

const Title: React.FC = ({ children }) => {
  return (
    <TitleBox>
      <TitleText>{children}</TitleText>
    </TitleBox>
  );
};
const TitleBox = styled.div`
  width: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 60px;
  background-color: white;
`;

const TitleText = styled.h1`
  color: ${(props) => props.theme.text.bl};
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  margin: 0;
`;

export default Title;
