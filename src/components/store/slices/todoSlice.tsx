import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ITodos {
    todos: {
        limit: number;
        skip: number;
        total: number;
        todos: {
            id: number;
            todo: string;
            lastName: string;
            completed: string;
            userId: number;
        }[];
    };
    isLoading: boolean;
    error?: string;
}

const initialState: ITodos = {
    todos: {
        limit: 0,
        skip: 0,
        total: 0,
        todos: [],
    },
    isLoading: false,
};

export const getTodos = createAsyncThunk('getToDos', async () => {
    const toDos = await fetch('https://dummyjson.com/todos?limit=10', { cache: 'no-store' }).then((res) => res.json());

    return toDos;
});

export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        setToDosData: (state, action) => {
            // state.products.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTodos.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.todos = action.payload;
        });
        builder.addCase(getTodos.rejected, (state, action: PayloadAction<any>) => {
            // БЕз понятия как типизировать тут экшн
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default todosSlice.reducer;
