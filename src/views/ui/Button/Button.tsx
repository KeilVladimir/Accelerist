import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, disable, children }) => {
  return (
    <ButtonStyle onClick={onClick} disabled={disable}>
      {children}
    </ButtonStyle>
  );
};
const ButtonStyle = styled.button`
  width: 100%;
  background-color: #2baee0;
  color: white;
  display: flex;
  align-items: center;
  height: 46px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  line-height: 23px;
  justify-content: center;
  :hover {
    background-color: #51c2ee;
    transition: 0.3s;
  }

  :focus {
    background-color: #1da7dc;
  }

  :disabled {
    background-color: #ceedf9;
    color: #2baee0;
    cursor: not-allowed;
  }
`;

export default Button;
