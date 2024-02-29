import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUserData } from "../../types/user";
interface UserState {
  userData: TUserData[];
}

const initialState: UserState = {
  userData: [],
};


const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<TUserData[]>) => {
      state.userData = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserData } = userSlice.actions;
