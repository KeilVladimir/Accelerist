import { createReducer } from '@reduxjs/toolkit';
import { SignInDto } from './types';
import { signInAction } from './actions';
import { PayloadAction } from '@reduxjs/toolkit';

interface Session extends SignInDto {
  token: string;
}

const initialState: Session = {
  token: '',
  email: '',
  password: '',
};

const sessionReducer = createReducer<Session>(initialState, {
  [signInAction.type]: (state, action: PayloadAction<Session>) => {
    state.email = action.payload.email;
    state.password = action.payload.password;
    state.token = action.payload.token;
  },
});

export default sessionReducer;
