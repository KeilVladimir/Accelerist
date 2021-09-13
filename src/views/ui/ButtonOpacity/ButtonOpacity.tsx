import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
}

const ButtonOpacity: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <ButtonStyle onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  width: 145px;
  background: rgba(18, 36, 52, 0.15);
  border-radius: 6px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 32px;
`;

const ButtonText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: white;
`;

export default ButtonOpacity;
