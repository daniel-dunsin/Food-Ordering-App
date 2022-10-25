import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../../public/data";
import { IStoreItems } from "../../type/interfaces";

const initialState: IStoreItems = {
  allItems: Items,
  filterParameter: "",
  filteredItem: [],
  cart: [],
  total: 0,
  amount: 0,
};

const itemsSlice = createSlice({
  name: "storeItems",
  initialState,
  reducers: {},
});

export const {} = itemsSlice.actions;
export default itemsSlice.reducer;
