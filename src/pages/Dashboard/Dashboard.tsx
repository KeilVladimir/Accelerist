import { useEffect, FC } from 'react';
import styled from 'styled-components';
import { Title } from 'ui/Title';
import { RaceCure } from './RaceCure';
import { Reports } from './Reports';
import { ProspectNavigator } from './ProspectNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../store/ducks/session/selectors';
import { getFavoriteCompanyRequest } from '../../store/ducks/company/actions';
import { getCompanys } from '../../store/ducks/company/selectors';
import { FavoriteCard } from './FavoriteCard';
import { getSavedList } from '../../store/ducks/SavedList/selectors';
import { getSavedListRequest } from '../../store/ducks/SavedList/actions';
import { Link } from 'react-router-dom';
import { Loader } from '../../ui/Loader';
import { themes } from 'ui/Loader/themes/index';
import { getLoader } from '../../store/ducks/company/selectors';
import { Routes } from 'routes';

const DashBoard: FC = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const isLoader = useSelector(getLoader);

  useEffect(() => {
    dispatch(getFavoriteCompanyRequest({ page: 1, limit: 6 }));
    dispatch(getSavedListRequest({ page: 1, limit: 2, sort: 'alphabit' }));
  }, [token]);

  const company = useSelector(getCompanys);
  const savedList = useSelector(getSavedList);

  return (
    <>
      {isLoader ? (
        <LoaderBox>
          <Loader theme={themes.secondary} />
        </LoaderBox>
      ) : (
        <DashBoardBox>
          <Title>Dashboard</Title>
          <Wrapper>
            <div>
              <CategoryTitleBox>
                <CategoryTitle>Prospecting Sessions</CategoryTitle>
                <SeeMore to={Routes.prospects}>see more</SeeMore>
              </CategoryTitleBox>
              <RaceCureContainer>
                {savedList.items.map((list) => (
                  <RaceCure key={list.id} {...list} />
                ))}
              </RaceCureContainer>
            </div>
            <Container>
              <Box>
                <FavoritesTitleBox>
                  <CategoryTitle>Favorites</CategoryTitle>
                  <SeeMore to={Routes.favorite}>see more</SeeMore>
                </FavoritesTitleBox>
                <FavoritesBox>
                  {company.items.map((com) => (
                    <FavoriteCard name={com.name} key={com.id} />
                  ))}
                </FavoritesBox>
              </Box>
              <Box>
                <FavoritesTitleBox>
                  <CategoryTitle>Reports</CategoryTitle>
                  <SeeMore to={Routes.favorite}>see more</SeeMore>
                </FavoritesTitleBox>
                <Reports />
              </Box>
            </Container>
            <div>
              <CategoryTitleBox>
                <CategoryTitle>Prospect Navigator</CategoryTitle>
                <SeeMore to={Routes.favorite}>see more</SeeMore>
              </CategoryTitleBox>
              <NavigatorBox>
                <ProspectNavigator />
                <ProspectNavigator />
                <ProspectNavigator />

                <ProspectNavigator />
              </NavigatorBox>
            </div>
          </Wrapper>
        </DashBoardBox>
      )}
    </>
  );
};

const NavigatorBox = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

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
  background: ${(props) => props.theme.background.secondGr};
  padding-top: 32px;
`;

const FavoritesBox = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 566px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CategoryTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.text.bl};
  margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Box = styled.div`
  max-width: 566px;
  width: 100%;
  box-sizing: border-box;
`;

const SeeMore = styled(Link)`
  color: ${(props) => props.theme.background.blue};
  font-size: 12px;
  line-height: 150%;
  text-decoration: none;
  cursor: pointer;
`;

const CategoryTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1096px;
  width: 100%;
  margin-top: 40px;
`;

const FavoritesTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 536px;
  width: 100%;
`;
const LoaderBox = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default DashBoard;
