import { FC } from 'react';
import styled from 'styled-components';
import { SavedListItem } from 'store/ducks/SavedList/types';
import { formateDate } from 'helpers/validate';
import { useHistory } from 'react-router-dom';

const RaceCure: FC<SavedListItem> = ({
  name,
  lastAuthor,
  prospectsAvailable,
  filters,
  id,
}) => {
  const history = useHistory();
  const downloadList = () => {
    history.push('/SavedList', { id: id });
  };

  return (
    <RaceCureBox onClick={downloadList}>
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
          <Date>{formateDate(lastAuthor.updatedAt)}</Date>
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
  cursor: pointer;
  background-color: ${(props) => props.theme.background.wh};
  margin-bottom: 24px;
`;

const TitleRace = styled.h3`
  font-weight: 500;
  font-size: 16px;
  display: block;
  color: ${(props) => props.theme.text.bl};
  line-height: 145%;
  border-bottom: inset;
  border-bottom-color: ${(props) => props.theme.border};
  margin-bottom: 16px;
  padding-bottom: 9px;
`;

const TitleFilters = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.gr};
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
`;

const Filter = styled.div`
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.border};
  padding: 5px;
  margin-right: 10px;
`;

const FilterName = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.bl};
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
  background: ${(props) => props.theme.background.wh};
  max-width: 235px;
  padding-top: 5px;
  padding-bottom: 4px;
  margin-right: 18px;
`;
const Scale = styled.p`
  color: ${(props) => props.theme.text.bl};
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  text-align: center;
`;

const TitleProspects = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.text.gr};
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
  background-color: ${(props) => props.theme.text.gr};
`;

const UserText = styled.div``;
const UserName = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.text.bl};
`;
const GreyText = styled.p`
  color: ${(props) => props.theme.text.gr};
  font-weight: 500;
  font-size: 12px;
`;

const Date = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.text.bl};
`;

export default RaceCure;
