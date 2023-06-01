import { createSlice, combineReducers } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'status',
    initialState: {
        isFirstTime: true,
    },
    reducers: {
        init(state) {
            state.isFirstTime = true;
        },
    }
});

const reducer = combineReducers({
    status:appSlice.reducer,
});

export const { init } = appSlice.actions;
export default reducer