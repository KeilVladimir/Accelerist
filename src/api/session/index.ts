import { httpClient } from '../index';
import { paths } from '../constains';
import { SignInDto } from '../../store/ducks/session/types';

export const signIn = async (data: SignInDto) => {
  return await httpClient.post(paths.signIn, data);
};

export const signUp = async (data: SignInDto) => {
  return await httpClient.post(paths.signUp, data);
};

export const sendEmail = async (data: { email: string }) => {
  return await httpClient.post(paths.sendEmail, data);
};

export const changePassword = async (data: {
  password: string;
  passwordConfirmation: string;
}) => {
  return await httpClient.post(paths.changePassword, data);
};
