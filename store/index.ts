import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers/items";
const store = configureStore({
  reducer: {
    storeItems: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;

export default store;
