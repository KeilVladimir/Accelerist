import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  isClick?: boolean;
}

const TabButton: React.FC<ButtonProps> = ({ children, onClick, isClick }) => {
  if (isClick) {
    onClick = undefined;
  }

  return (
    <Button onClick={onClick} color={isClick ? '#CAF0FF' : '#F8F8F8'}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  border: none;
  flex: 1;
  border-radius: 6px;
  height: 36px;
`;

export default TabButton;
