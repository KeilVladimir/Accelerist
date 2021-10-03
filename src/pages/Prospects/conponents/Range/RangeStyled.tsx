import { FC } from 'react';
import { Slider } from '@mui/material';
import styled from 'styled-components';
import 'rc-slider/assets/index.css';
import Box from '@mui/material/Box';
import { FieldRenderProps } from 'react-final-form';

interface RangeProps extends FieldRenderProps<string> {
  label: string;
}
const RangeSlider: FC<RangeProps> = ({ input, label }) => {
  const handleChange = (Event: Event, value: Array<number> | number) => {
    input.onChange(value);
  };

  return (
    <>
      <Label>{label}</Label>
      <Wraper>
        <BoxStyled>
          <StyledSlider
            min={18}
            defaultValue={[23, 64]}
            onChange={handleChange}
            valueLabelDisplay="on"
          />
        </BoxStyled>
      </Wraper>
    </>
  );
};

const BoxStyled = styled(Box)`
  @media only screen and (max-width: 768px) {
    max-width: 496px;
  }
`;
const Wraper = styled.div`
  margin-left: 40px;
  width: 100%;
  margin-bottom: 40px;
`;

const StyledSlider = styled(Slider)`
  & .MuiSlider-track {
    background-color: ${({ theme }) => theme.background.blue};
  }

  & .MuiSlider-rail {
    background-color: black;
    margin-left: -32px;
    padding-right: 64px;
  }

  & .MuiSlider-thumb {
    width: 72px;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.background.secondBlue};
    border-radius: 6px;
    background: ${({ theme }) => theme.background.wh};

    &:hover,
    &.Mui-focusVisible {
      box-shadow: unset;
    }
  }

  & .MuiSlider-valueLabel {
    font-size: 12px;
    color: black;
    top: 30px;
    transform: none;
    background: transparent;

    &:before {
      display: none;
    }
  }

  &.muislider-valuelabelopen: {
    transform: translate(50%, -100%) rotate(-45deg) scale(1);
  }

  ,
  & . Mui-active {
    transform: none;
  }
`;

const Label = styled.p`
  font-size: 12px;
  margin-bottom: 6px;
  color: ${(props) => props.theme.text.gr};
`;
export default RangeSlider;
