import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Icarts {
    carts: {
        limit: number;
        skip: number;
        total: number;
        products: {
            id: number;
            title: string;
            quantity: number;
            price: number;
            discountPercentage: number;
            total: number;
            discountedPrice: number;
        }[];
    };
    isLoading: boolean;
    error?: string;
}

export const getcarts = createAsyncThunk('getcarts', async () => {
    const carts = await fetch('https://dummyjson.com/carts?limit=10', { cache: 'no-store' }).then((res) => res.json());

    return carts;
});

export const cartsSlice = createSlice({
    name: 'cartsSlice',
    initialState: {
        carts: {
            limit: 0,
            skip: 0,
            total: 0,
            carts: [],
        },
        isLoading: false,
    },
    reducers: {
        setcartsData: (state, action) => {
            state.carts.carts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getcarts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getcarts.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.carts = action.payload;
        });
        builder.addCase(getcarts.rejected, (state, action: PayloadAction<any>) => {
            // БЕз понятия как типизировать тут экшн
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default cartsSlice.reducer;
