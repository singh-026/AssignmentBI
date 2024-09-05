// sample for a slice reducer

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../_app';
import { CounterState } from '../../_types';

// Define the initial state using that type
const initialState: CounterState = {
    value: [{ name: "Item A", id: 1 },{ name: "Item B", id: 2 },{ name: "Item C", id: 3 },{ name: "Item D", id: 4 },{ name: "Item E", id: 5 },{ name: "Item F", id: 6 },{ name: "Item G", id: 7 },{ name: "Item H", id: 8 },{ name: "Item I", id: 9 },{ name: "Item J", id: 10 }],
    loading: false,
    entities: [],
};

export const listSlice = createSlice({
    name: 'list',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<string|number>) => {
            // state.value -= 1;
            state.value = state.value.filter(item => item.id !== action.payload?.id);
        },
    },
    extraReducers: {
        // define all the async thunks here
    },
});

export const { remove } = listSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const list = (state: RootState) => state.list.value;

export default listSlice.reducer;
