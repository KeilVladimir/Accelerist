import { FieldRenderProps } from 'react-final-form';

export interface AuthInput extends FieldRenderProps<string> {
  placeholder: string;
  label: string;
  isPassword: boolean;
  isError?: boolean;
}

export enum AuthRoute {
  AUTH = 'AUTH',
  RESET = 'RESET',
  NEW_PASSWORD = 'NEW_PASSWORD',
}
