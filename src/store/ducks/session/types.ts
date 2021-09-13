export const enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
}

export interface SignInDto {
  email: string;
  password: string;
}
