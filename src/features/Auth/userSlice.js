// import userApi from 'api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
// import StorageKeys from 'constants/storage-keys';
export const checkPhone = createAsyncThunk('user/checkPhone', async (payload) => {
  const data = await userApi.checkPhone(payload);

  return data;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    [checkPhone.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
