import React from 'react';
import styled from 'styled-components';
import SearchInput from 'ui/SearchInput/SearchInput';
import { Form, Field } from 'react-final-form';
import Loupe from 'ui/icons/Loupe/Loupe';

const SearchForm: React.FC = () => {
  const onSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <FormBox>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          body: '',
        }}
        render={({ handleSubmit }) => (
          <>
            <Field
              name={'body'}
              component={SearchInput}
              placeholder={'Search'}
            />
            <SubmitButton onClick={handleSubmit}>
              <Loupe />
            </SubmitButton>
          </>
        )}
      />
    </FormBox>
  );
};

const FormBox = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  background: #f3fcff;
  border-radius: 6px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  padding-right: 11px;
  padding-left: 11px;
`;
const SubmitButton = styled.a``;

export default SearchForm;
