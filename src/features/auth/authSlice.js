import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authServices';

const getUserfromLocalStorage = localStorage.getItem('user') ?
    JSON.parse(localStorage.getItem('user')) :
    null;
const initialState = {
    user: getUserfromLocalStorage,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};
export const login = createAsyncThunk(
    'auth/login',
    async(userData, thunkAPI) => {
        try {
            return await authService.login(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getMonthlyData = createAsyncThunk(
    'orders/monthlydata',
    async(userData, thunkAPI) => {
        try {
            return await authService.getMonthlyOrders();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getOrders = createAsyncThunk(
    'order/get-orders',
    async(thunkAPI) => {
        try {
            return await authService.getOrders();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getOrder = createAsyncThunk(
    'order/get-order',
    async(id, thunkAPI) => {
        try {
            return await authService.getOrder(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateOrder = createAsyncThunk(
    'order/update-order',
    async(data, thunkAPI) => {
        try {
            return await authService.updateOrder(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (buildeer) => {
        buildeer
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = 'success';
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = 'success';
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.singleorder = action.payload;
                state.message = 'success';
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getMonthlyData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMonthlyData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.monthlyData = action.payload;
                state.message = 'success';
            })
            .addCase(getMonthlyData.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(updateOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.yearlyData = action.payload;
                state.message = 'success';
            })
            .addCase(updateOrder.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            });
    },
});

export default authSlice.reducer;