import { FC } from 'react';
import styled from 'styled-components';
import { CheckIcon } from 'ui/icons/check';
const Check: FC<{ isCheck: boolean }> = ({ isCheck }) => {
  return <Wraper check={isCheck}>{isCheck && <CheckIcon />}</Wraper>;
};

const Wraper = styled.div<{ check: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  background-color: ${(props) => (props.check ? '#CAF0FF' : '#FFFFFF')};
`;

export default Check;
