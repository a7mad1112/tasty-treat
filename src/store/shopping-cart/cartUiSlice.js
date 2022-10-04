import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: {cartIsVisiable: false},
    reducers: {
        toggle(state) {
            state.cartIsVisiable = !state.cartIsVisiable
        }
    }
});
export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;