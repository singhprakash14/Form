import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type TCountry={
  name:{
    common:string;
  }
}
export const getCountryData = createAsyncThunk(
  "country/getCountryData",
  async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}`);
      const json = await response.json();
      const parsedData = json?.map((el: TCountry) => ({
        label: el.name?.common,
      }));
      console.log(parsedData);
      return parsedData;
    } catch (error) {
      console.error("Error fetching country data:", error);
      throw error;
    }
  }
);

const countrySlice = createSlice({
    name: "country",

    initialState: {
        status: "",
        countryData: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCountryData.fulfilled, (state, action) => {
                state.countryData = action.payload;
                state.status = "";
            })
            .addCase(getCountryData.pending, (state) => {
                state.status = "Fetching country data. Please wait a moment...";
            })
            .addCase(getCountryData.rejected, (state) => {
                state.status = "Failed to fetch country data...";
            });
    },
    reducers: {}
});

export default countrySlice.reducer;
