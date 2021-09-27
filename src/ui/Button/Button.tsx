import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  disable?: boolean;
  theme?: DefaultTheme;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disable,
  children,
  theme,
}) => {
  return (
    <ButtonStyle onClick={onClick} disabled={disable} theme={theme}>
      {children}
    </ButtonStyle>
  );
};
const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme}

  :hover {
    ${(props) => props.theme.hover}
  }

  :focus {
    ${(props) => props.theme.focus}
  }

  :disabled {
    ${(props) => props.theme.disabled}
  }
`;

export default Button;
