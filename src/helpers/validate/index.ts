import { email } from '../../ constants';
import dayjs from 'dayjs';

export const required = (value: string) => {
  if (value?.trim().length < 6 || value?.trim().length === undefined) {
    return 'Incorrect password';
  }
};

export const validateEmail = (value: string) => {
  if (!email.test(value)) {
    return 'Incorrect valid email';
  }
};

export const formateDate = (date: string) => {
  return dayjs(date).format('DD MMMM YYYY');
};
