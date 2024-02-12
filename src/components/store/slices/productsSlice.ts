import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
interface IProducts {
    products: {
        limit: number;
        skip: number;
        total: number;
        products: {
            id: number;
            title: string;
            description: string;
            price: number;
            discountPercentage: number;
            rating: number;
            stock: number;
            brand: string;
            category: string;
        }[];
    };
    isLoading: boolean;
    error?: string;
}

const initialState: IProducts = {
    products: {
        limit: 0,
        skip: 0,
        total: 0,
        products: [],
    },
    isLoading: false,
};

export const getProducts = createAsyncThunk<IProducts>('getProducts', async () => {
    const products: IProducts = await fetch('https://dummyjson.com/products?limit=10', { cache: 'no-store' }).then((res) => res.json());

    return products;
});

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setProductsData: (state, action: PayloadAction<IProducts>) => {
            // state.products.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<IProducts>) => {
            state.isLoading = false;
            state = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            // БЕз понятия как типизировать тут экшн
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default productsSlice.reducer;
