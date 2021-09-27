import { useEffect, FC, useState } from 'react';
import styled from 'styled-components';
import { Title } from 'ui/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getLoader, getSavedList } from 'store/ducks/SavedList/selectors';
import { getSavedListRequest } from 'store/ducks/SavedList/actions';
import { ChevronLeft } from 'ui/icons/chevronLeft';
import ChevronRight from 'ui/icons/chevronRight/chevronRight';
import { RaceCure } from '../Dashboard/RaceCure';
import { Loader } from 'ui/Loader';
import themes from 'ui/Loader/themes';

interface Params {
  page: number;
  limit: number;
  sort: string;
}

enum FiltersName {
  alphabet = 'alphabet',
  available = 'available',
  activity = 'activity',
}

export const Prospects: FC = () => {
  const [filters, setFilters] = useState<FiltersName>(FiltersName.alphabet);
  const dispatch = useDispatch();
  const cards = useSelector(getSavedList);
  const isLoader = useSelector(getLoader);

  const [params, setParams] = useState<Params>({
    page: 1,
    limit: 15,
    sort: FiltersName.alphabet,
  });

  useEffect(() => {
    dispatch(getSavedListRequest(params));
  }, [params]);

  const resetFilter = (sort: string, newStateButton: FiltersName) => () => {
    setFilters(newStateButton);
    setParams({ ...params, sort: sort });
  };

  return (
    <>
      {isLoader ? (
        <LoaderBox>
          <Loader theme={themes.secondary} />
        </LoaderBox>
      ) : (
        <>
          <Title>Prospects</Title>
          <Wraper>
            <InfoBox>
              <SortBox>
                <TitleBox>
                  <SortText color={'#737373'}>Sort by</SortText>
                </TitleBox>
                <FilterBox
                  isActive={filters === FiltersName.alphabet}
                  onClick={resetFilter('alphabet', FiltersName.alphabet)}>
                  <SortText color={'#122434'}>Alphabet</SortText>
                </FilterBox>
                <FilterBox
                  isActive={filters === FiltersName.available}
                  onClick={resetFilter('available', FiltersName.available)}>
                  <SortText color={'#122434'}>Prospects Available</SortText>
                </FilterBox>
                <FilterBox
                  isActive={filters === FiltersName.activity}
                  onClick={resetFilter('last-activity', FiltersName.activity)}>
                  <SortText color={'#122434'}>Last Activity</SortText>
                </FilterBox>
              </SortBox>
              {cards.items.length !== 0 && (
                <CurrentNubmer>
                  <a
                    onClick={() => {
                      if (params.page > 1) {
                        setParams({ ...params, page: params.page - 1 });
                      }
                    }}>
                    <ChevronLeft />
                  </a>
                  <CurrentNubmerText>
                    {`1   of ${cards.meta?.itemCount} ${cards.meta?.totalItems}`}
                  </CurrentNubmerText>
                  <a
                    onClick={() => {
                      if (params.page !== cards.meta?.totalPages)
                        setParams({ ...params, page: params.page + 1 });
                    }}>
                    <ChevronRight />
                  </a>
                </CurrentNubmer>
              )}
            </InfoBox>
            <ProspectsBox>
              {cards.items.map((card) => (
                <RaceCure {...card} key={card.id} />
              ))}
            </ProspectsBox>
          </Wraper>
        </>
      )}
    </>
  );
};

const Wraper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  height: 100%;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 32px;
`;

const ProspectsBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 1096px;
`;

const CurrentNubmerText = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  display: flex;
  margin-right: 19px;
  margin-left: 19px;
`;
const SortBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 27px;
`;

const SortText = styled.a<{ color: string }>`
  font-size: 12px;
  line-height: 150%;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const FilterBox = styled.div<{ isActive: boolean }>`
  margin-right: 26px;
  width: auto;
  padding-bottom: 2px;
  border-bottom: ${(props) => (props.isActive ? '2px solid #2baee0' : 'none')};
`;

const TitleBox = styled.div`
  margin-right: 22px;
`;

const CurrentNubmer = styled.div`
  display: flex;
`;

const LoaderBox = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Prospects;
