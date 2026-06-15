import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api.js";
import {toast} from "react-toastify";

// -------------------------faq---------------------

export const getAllCategory = createAsyncThunk(
    "/auth/getAllCategory",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await api.getAllCategory(formData);
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

    },

    resucer: {},

    extraReducers: (builder) => {
        builder

        .addCase(getAllCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getAllCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.AllCategory = action.payload?.data?.categories;
          })
          .addCase(getAllCategory.rejected, (state, action) => {
            state.loading = false;
            state.AllCategory = [];
            state.error = action.payload?.message;
            // toast.error(action?.payload?.message);
          })
    }
  });

  export default homeSlice.reducer;