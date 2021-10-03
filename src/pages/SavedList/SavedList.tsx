import styled from 'styled-components';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanys } from 'store/ducks/company/selectors';
import { getLoader, getSavedList } from 'store/ducks/SavedList/selectors';
import { theme } from '../../ui/Button/themes';
import { Form, Field } from 'react-final-form';
import { FavoriteCard } from '../Favorites/components/FavoriteCard';
import RequestCompany from 'types';
import { getCompanyRequest } from 'store/ducks/company/actions';
import { ChevronLeft } from '../../ui/icons/chevronLeft';
import ChevronRight from '../../ui/icons/chevronRight/chevronRight';
import { UploadIcon } from '../../ui/icons/upload';
import { TrashIcon } from '../../ui/trash';
import themes from '../../ui/Loader/themes';
import {
  excelRequest,
  deleteAction,
  getSavedListIdRequest,
  updateRequest,
} from '../../store/ducks/SavedList/actions';
import createFile from 'helpers/excel';
import { Button } from '../../ui/Button';
import { PencilIcon } from '../../ui/pencil';
import { Input } from '../../ui/Input';
import { useLocation, useHistory } from 'react-router-dom';
import { Loader } from '../../ui/Loader';

interface LocationState {
  id: string;
}

const SavedList: FC = () => {
  const isLoader = useSelector(getLoader);
  const location = useLocation<LocationState>();
  const history = useHistory();
  const company = useSelector(getCompanys);
  const list = useSelector(getSavedList);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [deleteIds, setDeleteIds] = useState<Array<string>>([]);
  const [params, setParams] = useState<RequestCompany>({
    page: 1,
    limit: 15,
    ...list.actualList?.filters,
  });

  const addExcel = () => {
    dispatch(excelRequest(location.state.id));
    createFile(list.file);
  };

  const deleteList = () => {
    dispatch(deleteAction(location.state.id));
    history.push('/Prospects');
  };

  const toggleEdit = () => {
    setIsEdit((state) => !state);
  };

  const deleteCompanies = () => {
    setParams({ ...params, deleteIds: deleteIds });
  };
  const onSubmit = (value: { name: string }) => {
    toggleEdit();
    dispatch(updateRequest({ ...list.actualList, name: value.name }));
  };

  useEffect(() => {
    dispatch(getSavedListIdRequest(location.state.id));
    dispatch(getCompanyRequest(params));
  }, [params]);

  return (
    <>
      {isLoader ? (
        <LoaderBox>
          <Loader theme={themes.secondary} />
        </LoaderBox>
      ) : (
        <Wraper>
          <TitleBox>
            {isEdit ? (
              <Form
                onSubmit={onSubmit}
                initialValues={{
                  name: list.actualList?.name
                    ? list.actualList?.name
                    : 'Race of Cure',
                }}
                render={({ handleSubmit }) => (
                  <>
                    <Field component={Input} name={'name'} isList={true} />
                    <ButtonsBox>
                      <ButtonBox>
                        <Button theme={theme.Secondary} onClick={handleSubmit}>
                          <ButtonEditContent>
                            <p>Save</p>
                          </ButtonEditContent>
                        </Button>
                      </ButtonBox>
                      <ButtonBox>
                        <Button theme={theme.like} onClick={toggleEdit}>
                          Cancel{' '}
                        </Button>
                      </ButtonBox>
                    </ButtonsBox>
                  </>
                )}
              />
            ) : (
              <>
                <Title>
                  {list.actualList?.name
                    ? list.actualList?.name
                    : 'Race of Cure'}
                </Title>
                <ButtonsBox>
                  <ButtonBox>
                    <Button theme={theme.Secondary}>
                      <ButtonEditContent onClick={toggleEdit}>
                        <PencilIcon />
                        <p>Edit</p>
                      </ButtonEditContent>
                    </Button>
                  </ButtonBox>
                  <ButtonBox onClick={deleteList}>
                    <Button theme={theme.like}>Delete </Button>
                  </ButtonBox>
                </ButtonsBox>
              </>
            )}
          </TitleBox>
          <NumberCompany>
            {company.meta?.totalItems + ' Companies'}
          </NumberCompany>
          <InfoBox>
            <ConnectionBox>
              <Connection>
                <IconBox onClick={deleteCompanies}>
                  <TrashIcon />
                </IconBox>
                <ConnectionText>Delete</ConnectionText>
              </Connection>
              <Connection>
                <IconBox onClick={addExcel}>
                  <UploadIcon />
                </IconBox>
                <ConnectionText>Export to Excel</ConnectionText>
              </Connection>
            </ConnectionBox>
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
                  {`1   - ${company.meta?.itemCount}  of ${company.meta?.totalItems}`}
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
          </InfoBox>
          <ContainerForCards>
            {company.items.map((item) => (
              <FavoriteCard
                {...item}
                key={item.id}
                isList={true}
                setDeleteIds={setDeleteIds}
                deleteIds={deleteIds}
              />
            ))}
          </ContainerForCards>
        </Wraper>
      )}
    </>
  );
};
const LoaderBox = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  font-size: 32px;
  line-height: 148%;
`;
const Wraper = styled.div`
  padding-left: 60px;
`;
const ContainerForCards = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  height: auto;
  overflow: hidden;
`;
const ButtonEditContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1064px;
  box-sizing: border-box;
  width: 1096px;
  padding-left: 26px;
`;

const NumberCompany = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 32px;
  line-height: 145%;
  padding-left: 26px;
  margin-bottom: 24px;
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

const CurrentNubmer = styled.div`
  display: flex;
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

const ConnectionText = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.bl};
`;
const TitleBox = styled.div`
  padding: 24px;
  background: white;
  display: flex;
  max-width: 1095px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 82px;
  margin-left: 10px;
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export default SavedList;
