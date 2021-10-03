import { FC, useState } from 'react';
import styled from 'styled-components';
import { CitiesIcon } from 'ui/icons/cities';
import { Button } from 'ui/Button';
import { theme } from 'ui/Button/themes';
import { LikeIcon } from 'ui/icons/like';
import { Company } from 'store/ducks/company/types';
import { useDispatch } from 'react-redux';
import { dislikeRequest, likeRequest } from 'store/ducks/company/actions';
import { Link } from 'react-router-dom';
import { HeartNullIcon } from 'ui/icons/heartNull';
import { Check } from '../../../Search/components/Check';

interface CardProps extends Company {
  isList?: boolean;
  setDeleteIds?: (state: Array<string>) => void;
  deleteIds?: Array<string>;
}

const FavoriteCard: FC<CardProps> = ({
  name,
  state,
  city,
  street,
  phone,
  revenue,
  id,
  like,
  setDeleteIds,
  deleteIds,
  isList,
}) => {
  const dispatch = useDispatch();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const dislike = () => {
    if (like) {
      dispatch(dislikeRequest(id));
    } else {
      dispatch(likeRequest(id));
    }
  };

  const changeDeleteIds = () => {
    setIsCheck((state) => !state);
    if (setDeleteIds && deleteIds) {
      let newDeleteIds: Array<string> = deleteIds;
      if (!isCheck) {
        newDeleteIds?.push(id);
      } else {
        newDeleteIds = newDeleteIds?.filter((item) => {
          if (item !== id) {
            return item;
          }
        });
      }
      setDeleteIds(newDeleteIds);
    }
  };
  return (
    <Wrapper>
      {isList && (
        <CheckContainer onClick={changeDeleteIds}>
          <Check isCheck={isCheck} />
        </CheckContainer>
      )}
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
          <LinkToProfile to={{ pathname: '/Profile', state: { id: id } }}>
            <BlackText bottom={'12px'}>{name}</BlackText>
          </LinkToProfile>
          <GreyText bottom={'4px'}>
            {street + ' ' + city + ' ' + state}
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
            <ButtonLikeBox onClick={dislike}>
              <Button theme={theme.like}>
                {like ? <LikeIcon /> : <HeartNullIcon />}
              </Button>
            </ButtonLikeBox>
            <ButtonProfile>
              <Button theme={theme.Secondary}>Profile</Button>
            </ButtonProfile>
          </ButtonBox>
        </Container2>
      </FavoriteBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 26px 32px;
  background: ${(props) => props.theme.background.wh};
  border-radius: 6px;
  max-width: 536px;
  margin-bottom: 24px;
  margin-right: 24px;
  box-sizing: border-box;
  height: auto;
`;

const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FavoriteBox = styled.div`
  display: flex;
  height: auto;
`;
const Container1 = styled.div`
  width: 168px;
  height: 216px;
  border: 1px solid ${(props) => props.theme.border};
  margin-right: 16px;
`;
const ButtonProfile = styled.div`
  width: 244px;
`;

const Logo = styled.div`
  height: 156px;
  width: 168px;
  border-bottom: 1px solid ${(props) => props.theme.border};
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
  color: ${(props) => props.theme.text.bl};
  font-size: 16px;
  line-height: 145%;
  font-weight: 500;
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;

const GreyText = styled.p<{ top?: string; bottom?: string }>`
  color: ${(props) => props.theme.text.gr};
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
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const Focus = styled.div`
  width: 100%;
  padding-bottom: 12px;
  border-right: 1px solid ${(props) => props.theme.border};
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
