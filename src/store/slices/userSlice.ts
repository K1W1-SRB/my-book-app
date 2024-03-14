import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user_id: number;
  name: string;
  password: string;
  address: string;
  email: string;
  dob: Date;
}

const initialState: UserState = {
  user_id: 0,
  name: "",
  password: "",
  address: "",
  email: "",
  dob: "",
} as const;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
