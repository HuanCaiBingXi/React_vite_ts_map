import { configureStore } from "@reduxjs/toolkit";
import TabType from "./reducers/TabType";
export const store = configureStore({
    reducer: {
        TabType,
    },
    devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;