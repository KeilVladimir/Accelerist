import { FC } from 'react';
import styled from 'styled-components';

interface FavoriteProps {
  name: string;
}
const FavoriteCard: FC<FavoriteProps> = ({ name }) => {
  return (
    <Wraper>
      <Container>
        <FavoriteInfo>
          <Avatar />
          <FavoriteInfoText>
            <BlackText>{name}</BlackText>
            <GreyText>Priority Ranking 12</GreyText>
          </FavoriteInfoText>
        </FavoriteInfo>
        <FocusBox>
          <GreyText>CSR Focus</GreyText>
          <CategoryBox>
            <CategoryNameBox>
              <BlackText>No information</BlackText>
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
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.background.wh};
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
  background-color: ${(props) => props.theme.text.gr};
  border: 1px solid ${(props) => props.theme.border};
  box-sizing: border-box;
  border-radius: 6px;
`;

const BlackText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.text.bl};
`;

const GreyText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.text.gr};
`;

const FocusBox = styled.div``;

const CategoryBox = styled.div`
  display: flex;
  margin-top: 8px;
`;

const CategoryNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FavoriteCard;
