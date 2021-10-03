import { Field, Form } from 'react-final-form';
import { Select } from '../Select';
import { Ethnicities, Industry, Location } from '../../constants';
import RangeStyled from '../../../Prospects/conponents/Range/RangeStyled';
import { Tabs } from '../Tabs';
import { Button } from 'ui/Button';
import { theme } from 'ui/Button/themes';
import styled from 'styled-components';
import RequestCompany from 'types';
import { FC } from 'react';

interface FormProps {
  setParams: (params: RequestCompany) => void;
  params: RequestCompany;
  setIsOpenFilters: (isOpen: boolean) => void;
}

export const FiltersForm: FC<FormProps> = ({
  setParams,
  params,
  setIsOpenFilters,
}) => {
  const closeFilters = () => {
    setIsOpenFilters(false);
  };
  const onSubmit = (values: RequestCompany) => {
    setParams({
      ...params,
      gender: values.gender,
      ageRanges: values.ageRanges,
      ethnicities: values.ethnicities,
      industry: values.industry,
      revenueMax: values.revenue![0],
      revenueMin: values.revenue![1],
      location: values.location,
    });
    closeFilters();
  };
  return (
    <FormContainer>
      <AllCompanyText>Company</AllCompanyText>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          revenue: [18, 63],
        }}
        render={({ handleSubmit }) => (
          <>
            <AllFieldsBox>
              <FieldBoxLeft>
                <Field
                  name={'industry'}
                  component={Select}
                  options={Industry}
                  placeholder={'Search...'}
                  label={'Industry'}
                  multiple
                />
                <Field
                  name={'scope'}
                  component={Select}
                  options={Industry}
                  placeholder={'Search...'}
                  label={'Scope'}
                  multiple
                />
                <Field
                  name={'CDR'}
                  component={Select}
                  options={Industry}
                  placeholder={'Search...'}
                  label={'CDR Focus'}
                  multiple
                />
              </FieldBoxLeft>
              <FieldBox>
                <Field
                  name={'location'}
                  component={Select}
                  options={Location}
                  placeholder={'Search...'}
                  label={'Geographic Location'}
                  multiple
                />
                <Field
                  name={'SDG'}
                  component={Select}
                  options={Location}
                  placeholder={'Search...'}
                  label={'SDG Goals'}
                  multiple
                />
                <Field
                  name={'contributions'}
                  component={Select}
                  options={Location}
                  placeholder={'Search...'}
                  label={'Contributions'}
                  multiple
                />
              </FieldBox>
            </AllFieldsBox>
            <RangeBox>
              <Field
                name={'revenue'}
                component={RangeStyled}
                options={Location}
                label={'Revenue'}
              />
            </RangeBox>
            <AllCompanyText>Customer Demographics</AllCompanyText>
            <TabBox>
              <FieldBoxLeft>
                <Field
                  name={'gender'}
                  component={Tabs}
                  isGender={true}
                  options={Location}
                  label={'Gender'}
                />
              </FieldBoxLeft>
              <FieldBox>
                <Field
                  name={'relation'}
                  component={Tabs}
                  options={Location}
                  label={'Relation'}
                />
              </FieldBox>
            </TabBox>
            <AllFieldsBox>
              <FieldBoxLeft>
                <Field
                  name={'Household'}
                  component={Select}
                  options={Location}
                  placeholder={'Search...'}
                  label={'Household Income'}
                  multiple
                />
              </FieldBoxLeft>
              <FieldBox>
                <Field
                  name={'ethnicities'}
                  component={Select}
                  options={Ethnicities}
                  placeholder={'Search...'}
                  label={'Ethnicity'}
                  multiple
                />
              </FieldBox>
            </AllFieldsBox>
            <RangeBox>
              <Field
                name={'ageRanges'}
                component={RangeStyled}
                options={Location}
                label={'Age'}
              />
            </RangeBox>
            <ButtonsBox>
              <Button theme={theme.simple} onClick={closeFilters}>
                Cancel
              </Button>
              <ButtonBox>
                <Button theme={theme.Primary} onClick={handleSubmit}>
                  Submit
                </Button>
              </ButtonBox>
            </ButtonsBox>
          </>
        )}
      />
    </FormContainer>
  );
};
const FieldBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 496px;
`;
const RangeBox = styled.div`
  width: 80%;
  max-width: 420px;
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  width: 146px;
  margin-left: 10px;
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const FieldBoxLeft = styled.div`
  position: relative;
  width: 100%;
  margin-right: 23px;
  max-width: 496px;
`;

const AllFieldsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  box-sizing: border-box;
  max-width: 1096px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TabBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  box-sizing: border-box;
  max-width: 1096px;
  margin-bottom: 26px;
  @media only screen and (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  @media only screen and (max-width: 1440px) {
    padding: 20px;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
  }
  width: 100%;
  box-sizing: border-box;
  height: auto;
  padding: 40px;
  max-width: 1096px;
`;

const AllCompanyText = styled.p`
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.text.bl};
  margin-bottom: 27px;
  font-weight: bold;
`;

export default FiltersForm;
