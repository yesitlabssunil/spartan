import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api.js";
import {toast} from "react-toastify";

// -------------------------faq---------------------

export const getFaqData = createAsyncThunk(
    "/home/getFaqData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.getFaqData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

export const getContactScreenData = createAsyncThunk(
    "/home/getContactScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.getContactScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

export const postContactScreenData = createAsyncThunk(
    "/home/postContactScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.postContactScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

export const aboutScreenData = createAsyncThunk(
    "/home/aboutScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.aboutScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

export const resourceScreenData = createAsyncThunk(
    "/home/resourceScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.resourceScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

export const homeScreenData = createAsyncThunk(
    "/home/homeScreenData",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.homeScreenData(formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || { message: error.message },
        );
      }
    },
  );

  const homeSlice = createSlice({
    name: "home",
    initialState: {
      loading: false,
      error: null,
      AllFaq: [],
      contactData: [],
      resourceData: [],
      homeData: [],
      aboutData: null,
      submitLoading: false, 

    },

    resucer: {},

    extraReducers: (builder) => {
        builder

        .addCase(getFaqData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getFaqData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.AllFaq = action.payload?.data;
          })
          .addCase(getFaqData.rejected, (state, action) => {
            state.loading = false;
            state.AllFaq = [];
            state.error = action.payload?.message;
          })

          .addCase(getContactScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getContactScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.contactData = action.payload?.data;
          })
          .addCase(getContactScreenData.rejected, (state, action) => {
            state.loading = false;
            state.contactData = [];
            state.error = action.payload?.message;
          })

          .addCase(postContactScreenData.pending, (state) => {
            state.submitLoading  = true;
            state.error = null;
          })
          .addCase(postContactScreenData.fulfilled, (state, action) => {
            state.submitLoading  = false;
            state.error = null;
            toast.success(action.payload?.message || "Form submitted successfully");
            // state.contactData = action.payload?.data;
          })
          .addCase(postContactScreenData.rejected, (state, action) => {
            state.submitLoading  = false;
            state.contactData = [];
            // state.error = action.payload?.message;
            toast.error(action.payload?.message || "Submission failed");
          })

          .addCase(aboutScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(aboutScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.aboutData = action.payload?.data;
          })
          .addCase(aboutScreenData.rejected, (state, action) => {
            state.loading = false;
            // state.aboutData = [];
            state.error = action.payload?.message;
          })

          .addCase(resourceScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(resourceScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.resourceData = action.payload?.data;
          })
          .addCase(resourceScreenData.rejected, (state, action) => {
            state.loading = false;
            state.resourceData = [];
            state.error = action.payload?.message;
          })

          .addCase(homeScreenData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(homeScreenData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.homeData = action.payload?.data;
          })
          .addCase(homeScreenData.rejected, (state, action) => {
            state.loading = false;
            state.homeData = [];
            state.error = action.payload?.message;
          })
    }
  });

  export default homeSlice.reducer;