import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';

enum GenderValues {
  male = 'male',
  female = 'female',
  both = 'both',
}

enum Relations {
  single = 'single',
  married = 'married',
}

interface TabsProps extends FieldRenderProps<string> {
  isGender: boolean;
  label: string;
}

const Tabs: FC<TabsProps> = ({ isGender, input, label }) => {
  const [gender, setGender] = useState<GenderValues>(GenderValues.male);
  const [relation, setRelation] = useState<Relations>(Relations.married);
  const toggleGender = (newGender: GenderValues) => () => {
    setGender(newGender);
  };
  const toggleMarried = (newRelation: Relations) => () => {
    setRelation(newRelation);
  };
  useEffect(() => {
    if (isGender) {
      input.onChange(gender);
    } else {
      input.onChange(relation);
    }
  }, [gender, relation]);

  return (
    <>
      <Label>{label}</Label>
      <TabBox>
        {isGender ? (
          <TabList>
            <Tab
              onClick={toggleGender(GenderValues.male)}
              isActive={gender === GenderValues.male}>
              Male
            </Tab>
            <Tab
              onClick={toggleGender(GenderValues.female)}
              isActive={gender === GenderValues.female}>
              Female
            </Tab>
            <Tab
              onClick={toggleGender(GenderValues.both)}
              isActive={gender === GenderValues.both}>
              Both
            </Tab>
          </TabList>
        ) : (
          <TabList>
            <Tab
              onClick={toggleMarried(Relations.single)}
              isActive={relation === Relations.single}>
              Single
            </Tab>
            <Tab
              onClick={toggleMarried(Relations.married)}
              isActive={relation === Relations.married}>
              married
            </Tab>
          </TabList>
        )}
      </TabBox>
    </>
  );
};

const Label = styled.p`
  font-size: 12px;
  margin-bottom: 6px;
  margin-top: 18px;
  color: ${(props) => props.theme.text.gr};
`;

const Tab = styled.li<{ isActive?: boolean }>`
  background-color: ${(props) => (props.isActive ? '#CAF0FF' : '#f8f8f8')};
  border-radius: 6px;
  flex: 1;
  cursor: pointer;
  height: 36px;
  color: ${(props) =>
    props.isActive ? props.theme.background.wh : props.theme.text.bl}
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabList = styled.ul`
  background-color: #f8f8f8;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 6px;
`;

const TabBox = styled.div`
  width: 100%;
  border-radius: 6px;
  height: auto;
`;

export default Tabs;
