export const enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_UP = 'SIGN_UP',
  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',
  SEND_EMAIL = 'SEND_EMAIL',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  LOADER = 'LOADER',
  TIMER = 'TIMER',
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignIn extends SignInDto {
  accesToken: string;
  userId: number;
  firstName: string;
  lastName: string;
}

export interface ChangePass {
  password: string;
  passwordConfirmation: string;
}
