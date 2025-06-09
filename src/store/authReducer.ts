import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image?: string;
}

interface InitState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: InitState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, refreshToken, ...otherFields } = action.payload;

      return {
        ...state,
        user: otherFields,
        accessToken,
        refreshToken,
      };
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const reducer = authSlice.reducer;

const persistedAuthReducer = persistReducer(persistConfig, reducer);

export default persistedAuthReducer;
