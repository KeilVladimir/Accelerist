import { FC } from 'react';
import styled from 'styled-components';
import { HeartIcon } from 'ui/icons/heart';
import { Button } from 'ui/Button';
import { theme } from 'ui/Button/themes';

const NoFavorite: FC = () => {
  return (
    <Wraper>
      <NoFavoriteBox>
        <HeartIcon />
        <BlackText>No favorite company</BlackText>
        <GreyText>Go to the search page and add to favorites</GreyText>
        <Button theme={theme.Secondary}>Search</Button>
      </NoFavoriteBox>
    </Wraper>
  );
};

const Wraper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 284px);
  background-color: ${(props) => props.theme.background.wh};
  justify-content: center;
  align-items: center;
`;

const NoFavoriteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GreyText = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.gr};
  margin-top: 10px;
  margin-bottom: 32px;
`;

const BlackText = styled.p`
  color: ${(props) => props.theme.text.gr}
  font-size: 16px;
  line-height: 145%;
  font-weight: bold;
  margin-top: 39px;
`;

export default NoFavorite;
