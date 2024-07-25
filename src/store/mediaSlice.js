import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../utils/api';

export const fetchMedia = createAsyncThunk('media/fetchMedia', async () => {
  const response = await api.get('/media');
  return response.data;
});

export const uploadMedia = createAsyncThunk('media/uploadMedia', async (mediaData) => {
  const formData = new FormData();
  formData.append('media', mediaData);
  const response = await api.post('/media/upload', formData);
  return response.data;
});

export const deleteMedia = createAsyncThunk('media/deleteMedia', async (id) => {
  await api.delete(`/media/${id}`);
  return id;
});

const mediaSlice = createSlice({
  name: 'media',
  initialState: { media: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMedia.fulfilled, (state, action) => {
        state.media = action.payload;
        state.loading = false;
      })
      .addCase(fetchMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(uploadMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadMedia.fulfilled, (state, action) => {
        state.media.push(action.payload.media);
        state.loading = false;
      })
      .addCase(uploadMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMedia.fulfilled, (state, action) => {
        state.media = state.media.filter((item) => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mediaSlice.reducer;
