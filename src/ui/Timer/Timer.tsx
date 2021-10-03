import { useEffect, useState, useRef } from 'react';
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setTimer } from '../../store/ducks/session/actions';

export const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(59);
  const dispatch = useDispatch();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (time === 1) {
      dispatch(setTimer(false));
    }
    timerRef.current = +setInterval(() => {
      if (time > 1) {
        setTime((state) => state - 1);
      }
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [time, dispatch]);

  return <TimerText>00:{time}</TimerText>;
};

const TimerText = styled.p`
  color: #2baee0;
  font-size: 16px;
  opacity: 0.3;
  line-height: 145%;
`;
export default Timer;
