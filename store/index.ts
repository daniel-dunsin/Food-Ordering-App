import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers/items";
import otherSlices from "./reducers/others";
const store = configureStore({
  reducer: {
    storeItems: itemsReducer,
    others: otherSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;

export default store;
