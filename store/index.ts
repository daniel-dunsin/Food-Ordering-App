import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers/items";
const store = configureStore({
  reducer: {
    storeItems: itemsReducer,
  },
});

export default store;
