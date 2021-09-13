import React, { useState } from 'react';
import { HeaderAuth } from '../../views/ui/HeaderAuth';
import styled from 'styled-components';
import background from '../../assets/img/homedark.png';
import { Auth } from '../../views/components/Auth';
import { Reset } from '../../views/components/Reset';
import { NewPassword } from '../../views/components/NewPassword';
import { ButtonOpacity } from '../../views/ui/ButtonOpacity';
import { AuthRoute } from '../../types';
const Authorization: React.FC = () => {
  const [render, setRender] = useState<string>(AuthRoute.AUTH);

  const linkToAuth = () => {
    setRender(AuthRoute.AUTH);
  };

  return (
    <>
      <HeaderAuth />
      <Contents>
        {render === AuthRoute.AUTH ? (
          <Auth setRender={setRender} />
        ) : render === AuthRoute.RESET ? (
          <ResetBox>
            <ContainerReset>
              <Reset setRender={setRender} />
            </ContainerReset>
            <ButtonOpacityBox>
              <ButtonOpacity onClick={linkToAuth}>
                Return to Login
              </ButtonOpacity>
            </ButtonOpacityBox>
          </ResetBox>
        ) : (
          <ContainerReset>
            <NewPassword />
            <ButtonOpacity>Contact support</ButtonOpacity>
          </ContainerReset>
        )}
      </Contents>
    </>
  );
};

const Contents = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  border: 1px black;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const ContainerReset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin-left: 15px;
  margin-right: 15px;
`;

const ResetBox = styled.div`
  align-items: center;
  margin-top: 72px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonOpacityBox = styled.div`
  position: absolute;
  bottom: 27px;
`;
export default Authorization;
