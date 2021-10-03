import { useEffect, useState, FC } from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from 'ui/Input';
import styled from 'styled-components';
import { FiltersIcon } from 'ui/icons/filters';
import { LoupeIcon } from 'ui/icons/Loupe';
import RequestCompany from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyRequest } from 'store/ducks/company/actions';
import { UploadIcon } from 'ui/icons/upload';
import { FolderIcon } from 'ui/icons/folder';
import { MailIcon } from 'ui/icons/mail';
import { ChevronLeft } from 'ui/icons/chevronLeft';
import ChevronRight from 'ui/icons/chevronRight/chevronRight';
import { getCompanys, getLoader } from '../../store/ducks/company/selectors';
import { FavoriteCard } from '../Favorites/components/FavoriteCard';
import { Loader } from 'ui/Loader';
import themes from 'ui/Loader/themes';
import { saveListAction } from '../../store/ducks/SavedList/actions';
import { FiltersForm } from './components/filtersForm';

const Search: FC = () => {
  const isLoader = useSelector(getLoader);
  const company = useSelector(getCompanys);
  const dispatch = useDispatch();
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
  const [params, setParams] = useState<RequestCompany>({
    page: 1,
    limit: 12,
  });

  const onSubmit = (values: { q: string }) => {
    setParams({ ...params, q: values.q });
  };

  const toggleFilters = () => {
    setIsOpenFilters((state) => !state);
  };

  useEffect(() => {
    dispatch(getCompanyRequest(params));
  }, [params]);

  return (
    <>
      <HeaderSearch>
        <TitleBox>
          <TitleText>Search</TitleText>
        </TitleBox>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            q: '',
          }}
          render={({ handleSubmit }) => (
            <FieldBox>
              <Field name={'q'} component={Input} placeholder={'Search'} />
              <FiltersBox onClick={toggleFilters}>
                <FiltersIcon />
              </FiltersBox>
              <LoupeBox onClick={handleSubmit}>
                <LoupeIcon />
              </LoupeBox>
            </FieldBox>
          )}
        />
      </HeaderSearch>
      <Wraper>
        {isOpenFilters && (
          <FiltersForm
            setParams={setParams}
            params={params}
            setIsOpenFilters={setIsOpenFilters}
          />
        )}
        <AllCompanyText>
          Found {company.meta?.totalItems} companies
        </AllCompanyText>
        <InfoBox>
          <InteractionBox>
            <ConnectionBox>
              <Connection>
                <IconBox>
                  <FolderIcon />
                </IconBox>
                <ConnectionText>Save List</ConnectionText>
              </Connection>
              <Connection>
                <IconBox
                  onClick={() => dispatch(saveListAction({ filters: params }))}>
                  <UploadIcon />
                </IconBox>
                <ConnectionText>Export to Excel</ConnectionText>
              </Connection>
              <Connection>
                <IconBox>
                  <MailIcon />
                </IconBox>
                <ConnectionText>Accelerist Support</ConnectionText>
              </Connection>
            </ConnectionBox>
          </InteractionBox>
          <div>
            {company.items.length !== 0 && (
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
                  {`1   of ${company.meta?.itemsPerPage} ${company.meta?.totalItems}`}
                </CurrentNubmerText>
                <a
                  onClick={() => {
                    if (params.page !== company.meta?.totalPages)
                      setParams({ ...params, page: params.page + 1 });
                  }}>
                  <ChevronRight />
                </a>
              </CurrentNubmer>
            )}
          </div>
        </InfoBox>
        {isLoader ? (
          <LoaderBox>
            <Loader theme={themes.secondary} />
          </LoaderBox>
        ) : (
          <ContainerForCards>
            {company.items.map((item) => (
              <FavoriteCard key={item.id} {...item} />
            ))}
          </ContainerForCards>
        )}
      </Wraper>
    </>
  );
};

const LoaderBox = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wraper = styled.div`
  @media only screen and (max-width: 1440px) {
    padding-left: 32px;
  }
  @media only screen and (max-width: 780px) {
    padding-left: 16px;
  }
  background-color: ${(props) => props.theme.background.wh};
  height: auto;
  padding-left: 60px;
  padding-top: 32px;
`;

const FieldBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 496px;
`;

const FiltersBox = styled.button`
  position: absolute;
  top: 17px;
  right: 46px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

const CurrentNubmer = styled.div`
  display: flex;
`;

const LoupeBox = styled.button`
  position: absolute;
  top: 17px;
  right: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  justify-content: start;
  padding: 24px 0;
  background-color: ${(props) => props.theme.background.wh};
  padding-left: 60px;
`;

const TitleText = styled.p`
  color: ${(props) => props.theme.text.bl};
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  @media only screen and (max-width: 768px) {
    margin-right: 28px;
  }
`;

const TitleBox = styled.div`
  margin-right: 82px;
  @media only screen and (max-width: 768px) {
    margin-right: 32px;
  }
`;

const InteractionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConnectionBox = styled.div`
  display: flex;
`;

const Connection = styled.div`
  display: flex;
  margin-right: 38px;
  align-items: center;
`;

const IconBox = styled.div`
  margin-right: 9px;
`;

const ContainerForCards = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  height: auto;
  overflow: hidden;
  margin-top: 26px;
`;

const ConnectionText = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.bl};
`;

const CurrentNubmerText = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.bl};
  display: flex;
  margin-right: 19px;
  margin-left: 19px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  max-width: 1096px;
`;

const AllCompanyText = styled.p`
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.text.bl};
  margin-bottom: 27px;
  font-weight: bold;
`;
export default Search;
