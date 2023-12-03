import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoCurrencyValue: [],
};

const homepage = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setCryptoCurrencyValue: (state, action) => {
      state.cryptoCurrencyValue = action.payload;
    },
  },
});

export const { setCryptoCurrencyValue } = homepage.actions;

export default homepage.reducer;
