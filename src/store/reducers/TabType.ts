import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
export interface AppState {
    type: 1 | 2;
}

const initialState: AppState = {
    type: 1,
};

export const TabTypeSlice = createSlice({
    name: "TabType",
    initialState,
    reducers: {
        changeType: (state, action: PayloadAction<1 | 2>) => {
            state.type = action.payload;
        },
    },
});

export const { changeType } = TabTypeSlice.actions;
export const selectType = (state: RootState) => state.TabType.type;

export default TabTypeSlice.reducer;
