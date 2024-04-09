import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user_id: number;
  name: string;
  password: string;
  address: string;
  email: string;
  dob: ''
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
      return { ...state, ...action.payload, isLoggedIn: true  };
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Selectors
export const isLoggedIn = (state: { user: UserState }) => {
  const { user } = state;
  if (!user) {
    return false; // Return false if user state is undefined
  }

  const { user_id, name, password, address, email, dob } = user;
  return !!user_id || !!name || !!password || !!address || !!email || !!dob;
};


// Exports all actions
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
