import { FC } from 'react';
import styled from 'styled-components';
import { CitiesIcon } from 'ui/icons/cities';
import { Button } from '../../../../ui/Button';
import { theme } from '../../../../ui/Button/themes';
import { LikeIcon } from '../../../../ui/icons/like';
import { Company } from '../../../../store/ducks/company/types';
import { useDispatch } from 'react-redux';
import { dislikeAction } from '../../../../store/ducks/company/actions';
import { Link } from 'react-router-dom';

const FavoriteCard: FC<Company> = ({
  name,
  state,
  city,
  street,
  phone,
  revenue,
  id,
}) => {
  const dispatch = useDispatch();

  const dislike = () => {
    dispatch(dislikeAction(id));
  };

  return (
    <Wrapper>
      <FavoriteBox>
        <Container1>
          <Logo>
            <CitiesIcon />
          </Logo>
          <PriorityRanking>
            <GreyText top={'8px'}>Priority Ranking</GreyText>
            <BlackText top={'2px'}>43</BlackText>
          </PriorityRanking>
        </Container1>
        <Container2>
          <LinkToProfile to={'/Profile'}>
            <BlackText bottom={'12px'}>{name}</BlackText>
          </LinkToProfile>
          <GreyText bottom={'4px'}>
            {street + ' ' + city + ' ' + ' ' + state}
          </GreyText>
          <GreyText bottom={'28px'}>{phone}</GreyText>
          <InfoBox>
            <Focus>
              <GreyText>CSR Focus</GreyText>
              <BlackText top={'4px'}>No information</BlackText>
            </Focus>
            <Revenue>
              <GreyText>Revenue</GreyText>
              <BlackText>$ {revenue}</BlackText>
            </Revenue>
          </InfoBox>
          <ButtonBox>
            <ButtonLikeBox>
              <Button theme={theme.like} onClick={dislike}>
                <LikeIcon />
              </Button>
            </ButtonLikeBox>
            <Button theme={theme.Secondary}>Profile</Button>
          </ButtonBox>
        </Container2>
      </FavoriteBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 26px 32px;
  background: #ffffff;
  border-radius: 6px;
  max-width: 536px;
  margin-bottom: 24px;
  margin-right: 24px;
  box-sizing: border-box;
  height: auto;
`;

const FavoriteBox = styled.div`
  display: flex;
  height: auto;
`;
const Container1 = styled.div`
  width: 168px;
  height: 216px;
  border: 1px solid #e8e8e8;
  margin-right: 16px;
`;

const Logo = styled.div`
  height: 156px;
  width: 168px;
  border-bottom: 1px solid rgb(232, 232, 232);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriorityRanking = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlackText = styled.p<{ top?: string; bottom?: string }>`
  color: black;
  font-size: 16px;
  line-height: 145%;
  font-weight: 500;
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;

const GreyText = styled.p<{ top?: string; bottom?: string }>`
  color: #737373;
  font-size: 12px;
  line-height: 150%;
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;

const Container2 = styled.div`
  height: 216px;
  width: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  max-width: 288px;
  border-bottom: 1px solid rgb(232, 232, 232);
`;

const Focus = styled.div`
  width: 100%;
  padding-bottom: 12px;
  border-right: 1px solid rgb(232, 232, 232);
`;

const Revenue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
`;
const ButtonLikeBox = styled.div`
  margin-right: 8px;
  width: 40px;
`;

const LinkToProfile = styled(Link)`
  outline: none;
  list-style: none;
  text-decoration: none;
`;
export default FavoriteCard;
