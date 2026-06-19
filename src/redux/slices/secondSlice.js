import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api.js";
import {toast} from "react-toastify";

export const cmmcScreenData = createAsyncThunk(
    "/home/cmmcScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.cmmcScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

export const industryScreenData = createAsyncThunk(
    "/home/industryScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.industryScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

export const approachScreenData = createAsyncThunk(
    "/home/approachScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.approachScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

  export const complianceScreenData = createAsyncThunk(
    "/home/complianceScreenData",
    async (formData, {rejectWithValue}) => {
      try {
        const response = await api.complianceScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || {message: error.message},
        );
      }
    },
  )

  export const getBlogDetails = createAsyncThunk(
    "/home/getBlogDetails",
    async (id, {rejectWithValue}) => {
      try {
        const response = await api.getBlogDetails(id);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || {message: error.message},
        );
      }
    },
  )

  export const globalFooter = createAsyncThunk(
    "/home/globalFooter",
    async (formData, {rejectWithValue}) => {
      try{
        const response = await api.globalFooter(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || {message: error.message},
        );
      }
    },
  )


  const homeSlice = createSlice({
    name: "home",
    initialState: {
      loading: false,
      error: null,
      cmmcData: null,
      industryData: null,
      approachData: null,
      complianceData: null,
      blogDetails: null,
      footerData: null,

    },

    resucer: {},

    extraReducers: (builder) => {
        builder

        .addCase(cmmcScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(cmmcScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.cmmcData = action.payload?.data;
          })
          .addCase(cmmcScreenData.rejected, (state, action) => {
            state.loading = false;
            // state.cmmcData = [];
            state.error = action.payload?.message;
          })

          .addCase(industryScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(industryScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.industryData = action.payload?.data;
          })
          .addCase(industryScreenData.rejected, (state, action) => {
            state.loading = false;
            // state.industryData = [];
            state.error = action.payload?.message;
          })

          .addCase(approachScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(approachScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.approachData = action.payload?.data;
          })
          .addCase(approachScreenData.rejected, (state, action) => {
            state.loading = false;
            // state.industryData = [];
            state.error = action.payload?.message;
          })

          .addCase(complianceScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(complianceScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.complianceData = action.payload?.data;
          })
          .addCase(complianceScreenData.rejected, (state, action) => {
            state.loading = false;
            // state.industryData = [];
            state.error = action.payload?.message;
          })

          .addCase(getBlogDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getBlogDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.blogDetails = action.payload?.data;
          })
          .addCase(getBlogDetails.rejected, (state, action) => {
            state.loading = false;
            // state.industryData = [];
            state.error = action.payload?.message;
          })

          .addCase(globalFooter.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(globalFooter.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.footerData = action.payload?.data;
          })
          .addCase(globalFooter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message;
          })


    }
  });

  export default homeSlice.reducer;