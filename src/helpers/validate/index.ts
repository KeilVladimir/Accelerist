import { email } from '../../ constants';

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
