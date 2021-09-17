import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/Header';
import { Title } from 'ui/Title';
import { RaceCure } from './RaceCure';
import { FavoriteCard } from './FavoriteCard';
import { Reports } from './Reports';

const DashBoard: React.FC = () => {
  return (
    <DashBoardBox>
      <Header />
      <Title>Dashboard</Title>
      <Wrapper>
        <div>
          {/*<CategoryTitle>Prospecting Sessions</CategoryTitle>*/}
          <RaceCureContainer>
            <RaceCure />
            <RaceCure />
          </RaceCureContainer>
          {/*<CategoryTitle>Favorites</CategoryTitle>*/}
        </div>
        <Container>
          <FavoritesBox>
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
          </FavoritesBox>
          <Reports></Reports>
        </Container>
      </Wrapper>
    </DashBoardBox>
  );
};
const DashBoardBox = styled.div`
  height: 100%;
  width: 100%;
`;

const RaceCureContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  width: auto;
  padding-left: 60px;
  background: #f9f9f9;
  padding-top: 32px;
`;

const FavoritesBox = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 536px;
  margin-right: 24px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CategoryTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #122434;
  margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
export default DashBoard;
