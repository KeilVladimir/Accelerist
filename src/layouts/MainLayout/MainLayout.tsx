import { FC } from 'react';
import { Header } from '../../components/Header';
import styled from 'styled-components';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default MainLayout;
