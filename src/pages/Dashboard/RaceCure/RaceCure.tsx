import { FC } from 'react';
import styled from 'styled-components';
import { SavedListItem } from '../../../store/ducks/SavedList/types';
import dayjs from 'dayjs';

const RaceCure: FC<SavedListItem> = ({
  name,
  lastAuthor,
  prospectsAvailable,
  filters,
}) => {
  const refactorDate = (date: string) => {
    return dayjs(date).format('DD MMMM YYYY');
  };
  //Вывожу фильтры по три и в таком виде , т.к. в дизайне и в примере
  //так выводят :)
  return (
    <RaceCureBox>
      <TitleRace>{!name ? 'No name' : name}</TitleRace>
      <TitleFilters>Filters</TitleFilters>
      <FilterBox>
        <Filter>
          <FilterName>{filters?.q ? filters.q : 'No info'}</FilterName>
        </Filter>
        <Filter>
          <FilterName>{filters?.scope ? filters.scope : 'No info'}</FilterName>
        </Filter>
        <Filter>
          <FilterName>
            {'Gender: '}
            {filters?.gender ? filters.gender : 'No info'}
          </FilterName>
        </Filter>
      </FilterBox>
      <ProspectsBox>
        <Prospects>
          <TitleProspects>№ of Prospects Available</TitleProspects>
          <Scale>{prospectsAvailable}</Scale>
        </Prospects>
        <Prospects>
          <TitleProspects>№ of Contacts Pursued</TitleProspects>
          <Scale>{prospectsAvailable}</Scale>
        </Prospects>
      </ProspectsBox>
      <UserBox>
        <UserInfo>
          <UserAvatar />
          <div>
            <UserName>
              {lastAuthor.firstName + ' ' + lastAuthor.lastName}
            </UserName>
            <GreyText>Owner</GreyText>
          </div>
        </UserInfo>
        <UserText>
          <GreyText>Last Activity</GreyText>
          <Date>{refactorDate(lastAuthor.updatedAt)}</Date>
        </UserText>
      </UserBox>
    </RaceCureBox>
  );
};
const RaceCureBox = styled.div`
  padding: 24px;
  max-width: 536px;
  margin-right: 24px;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 24px;
`;

const TitleRace = styled.h3`
  font-weight: 500;
  font-size: 16px;
  display: block;
  color: #122434;
  line-height: 145%;
  border-bottom: inset;
  border-bottom-color: #e8e8e8;
  margin-bottom: 16px;
  padding-bottom: 9px;
`;

const TitleFilters = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
`;

const Filter = styled.div`
  border-radius: 6px;
  border: 1px solid #d4f3ff;
  padding: 5px;
  margin-right: 10px;
`;

const FilterName = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin: 0;
`;

const ProspectsBox = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Prospects = styled.div`
  width: 100%;
  background: #f9f9f9;
  max-width: 235px;
  padding-top: 5px;
  padding-bottom: 4px;
  margin-right: 18px;
`;
const Scale = styled.p`
  color: #122434;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  text-align: center;
`;

const TitleProspects = styled.p`
  font-size: 12px;
  color: #737373;
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
const UserAvatar = styled.div`
  border-radius: 50%;
  margin-right: 12px;
  width: 40px;
  height: 40px;
  background-color: gray;
`;

const UserText = styled.div``;
const UserName = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #122434;
`;
const GreyText = styled.p`
  color: #737373;
  font-weight: 500;
  font-size: 12px;
`;

const Date = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #122434;
`;

export default RaceCure;
