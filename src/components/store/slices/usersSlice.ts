import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IUser {
    users: {
        limit: number;
        skip: number;
        total: number;
        users: {
            id: number;
            firstName: string;
            lastName: string;
            maidenName: string;
            age: number;
            gender: number;
        }[];
    };
    isLoading: boolean;
    error?: string;
}

const initialState: IUser = {
    users: {
        limit: 0,
        skip: 0,
        total: 0,
        users: [],
    },
    isLoading: false,
};

export const getUsers = createAsyncThunk('getProducts', async () => {
    const users = await fetch('https://dummyjson.com/users?limit=10', { cache: 'no-store' }).then((res) => res.json());

    return users;
});

export const usersSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setProductsData: (state, action) => {
            // state.products.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
            // БЕз понятия как типизировать тут экшн
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;
