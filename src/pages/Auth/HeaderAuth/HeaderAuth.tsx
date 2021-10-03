import { FC } from 'react';
import styled from 'styled-components';
import { LogoIcon } from 'ui/icons/logo';

const HeaderAuth: FC = () => {
  return (
    <>
      <HeaderBox>
        <LogoIcon />
      </HeaderBox>
    </>
  );
};

const HeaderBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.text.bl};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default HeaderAuth;
