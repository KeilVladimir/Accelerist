import styled from 'styled-components';
import { Title } from 'ui/Title';
import { useEffect, useState, FC } from 'react';
import { FavoriteCard } from './components/FavoriteCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanys, getLoader } from '../../store/ducks/company/selectors';
import { ChevronLeft } from 'ui/icons/chevronLeft';
import ChevronRight from 'ui/icons/chevronRight/chevronRight';
import { getFavoriteCompanyRequest } from 'store/ducks/company/actions';
import { NoFavorite } from './components/NoFavorite';
import { Loader } from 'ui/Loader';
import { themes } from 'ui/Loader/themes';

const Favorites: FC = () => {
  const [page, setPage] = useState<number>(1);
  const company = useSelector(getCompanys);
  const dispatch = useDispatch();
  const isLoader = useSelector(getLoader);

  useEffect(() => {
    dispatch(getFavoriteCompanyRequest({ page: page, limit: 15 }));
  }, [page]);

  return (
    <>
      {isLoader ? (
        <LoaderBox>
          <Loader theme={themes.secondary} />
        </LoaderBox>
      ) : (
        <>
          <Title>Favorites</Title>
          <FavoritesBox>
            <InfoBox>
              <NumberCompany>
                {company.meta?.totalItems + ' Companies'}
              </NumberCompany>
              {company.items.length !== 0 && (
                <CurrentNubmer>
                  <a
                    onClick={() => {
                      if (page > 16) {
                        setPage(page - 1);
                      }
                    }}>
                    <ChevronLeft />
                  </a>
                  <CurrentNubmerText>
                    {`1   - ${company.meta?.itemCount}  of ${company.meta?.totalItems}`}
                  </CurrentNubmerText>
                  <a
                    onClick={() => {
                      if (page !== company.meta?.totalPages) setPage(page + 1);
                    }}>
                    <ChevronRight />
                  </a>
                </CurrentNubmer>
              )}
            </InfoBox>
            <Container>
              {company.items.length !== 0 ? (
                company.items.map((com) => (
                  <FavoriteCard key={com.id} {...com} />
                ))
              ) : (
                <NoFavorite />
              )}
            </Container>
          </FavoritesBox>
        </>
      )}
    </>
  );
};

const FavoritesBox = styled.div`
  width: 100%;
  background-color: #f9f9f9;

  padding-left: 60px;
  padding-top: 32px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 1096px;
`;
const NumberCompany = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #122434;
`;
const Container = styled.div`
  display: flex;
  justify-content: start;
  height: auto;
  overflow: hidden;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CurrentNubmer = styled.div`
  display: flex;
`;
const CurrentNubmerText = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  display: flex;
  margin-right: 19px;
  margin-left: 19px;
`;

const LoaderBox = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Favorites;
