import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<object>) => {
      state.isAuthenticated = true;
      state.token = action.payload?.token;
    },
    setLogoutData: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { setLoginData, setLogoutData } = authSlice.actions;
export const authReducer = authSlice.reducer;
