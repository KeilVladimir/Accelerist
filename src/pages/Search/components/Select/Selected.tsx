import Select from 'react-select';
import { FC } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { Option } from './Option';
import { OnChangeValue } from 'react-select';
import { CSSObject } from '@emotion/styled';
interface SearchableMultiSelectProps
  extends FieldRenderProps<Array<{ value: string; label: string }>> {
  label?: string;
}

const customStyles = {
  multiValue: () => ({
    color: 'green',
    width: 'auto',
    display: 'flex',
    background: 'white',
  }),
  multiValueRemove: () => ({
    display: 'none',
  }),
  menu: (provided: CSSObject) => ({
    ...provided,
    margin: '0px',
    paddingBottom: '10px',
    border: 0,
  }),
  control: () => ({
    display: 'flex',
    border: '1px solid #E8E8E8',
  }),
  option: () => ({
    cursor: 'pointer',
  }),
};

const Selected: FC<SearchableMultiSelectProps> = ({
  label = '',
  options,
  input,
  ...props
}) => {
  const handleChange = (
    option: OnChangeValue<
      { value: string | null } | readonly { value: string }[],
      false
    >,
  ) => {
    input.onChange(option);
  };
  return (
    <Wraper>
      <Label>{label}</Label>
      <Select
        {...props}
        options={options}
        isMulti
        value={input.value}
        onChange={handleChange}
        isSearchable={false}
        styles={customStyles}
        closeMenuOnSelect={false}
        components={{ Option }}
        hideSelectedOptions={false}
      />
    </Wraper>
  );
};

const Label = styled.p`
  font-size: 12px;
  margin-bottom: 6px;
  color: ${(props) => props.theme.text.gr};
`;

const Wraper = styled.div`
  margin-bottom: 28px;
`;
export default Selected;
