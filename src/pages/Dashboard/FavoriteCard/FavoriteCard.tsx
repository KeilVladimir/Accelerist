import React from 'react';
import styled from 'styled-components';

const FavoriteCard: React.FC = () => {
  return (
    <Wraper>
      <Container>
        <FavoriteInfo>
          <Avatar />
          <FavoriteInfoText>
            <BlackText>Nasa</BlackText>
            <GreyText>Priority Ranking 12</GreyText>
          </FavoriteInfoText>
        </FavoriteInfo>
        <FocusBox>
          <GreyText>CSR Focus</GreyText>
          <CategoryBox>
            <CategoryNameBox>
              <BlackText>Health</BlackText>
              <Dot />
            </CategoryNameBox>
            <CategoryNameBox>
              <BlackText>Animals</BlackText>
              <Dot />
            </CategoryNameBox>
            <CategoryNameBox>
              <BlackText>Education</BlackText>
            </CategoryNameBox>
          </CategoryBox>
        </FocusBox>
      </Container>
    </Wraper>
  );
};

const Wraper = styled.div`
  padding: 24px;
  max-width: 256px;
  height: auto;
  border-radius: 6px;
  width: auto;
  background-color: #ffffff;
  margin-bottom: 15px;
  margin-right: 24px;
`;

const Container = styled.div``;

const FavoriteInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const FavoriteInfoText = styled.div`
  margin-left: 12px;
`;
const Avatar = styled.div`
  width: 48px;
  height: 48px;
  background-color: grey;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
`;

const BlackText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #122434;
`;

const GreyText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #737373;
`;

const FocusBox = styled.div``;

const CategoryBox = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: grey;
  margin-left: 6px;
  margin-right: 6px;
`;

const CategoryNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FavoriteCard;
