import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Items } from "../../public/data";
import { IData, IStoreItems } from "../../types/interfaces";

const initialState: IStoreItems = {
  allItems: [...Items],
  filterParameter: "burger",
  filteredItem: [],
  cart: [],
  total: 0,
  amount: 0,
};

const itemsSlice = createSlice({
  name: "storeItems",
  initialState,
  reducers: {
    setFilterParameters: (
      state: IStoreItems,
      action: PayloadAction<{
        param: string;
      }>
    ) => {
      state.filterParameter = action.payload.param;
    },

    filterItems: (state: IStoreItems) => {
      state.filteredItem = state.allItems.filter(
        (item) => item.itemId === state.filterParameter
      );
    },
    filterItemsBySearch: (
      state: IStoreItems,
      action: PayloadAction<{ param: string }>
    ) => {
      state.filteredItem = state.allItems.filter((item) => {
        if (
          item.itemId === state.filterParameter &&
          item.name.toLowerCase().includes(action.payload.param.toLowerCase())
        ) {
          return item;
        }
      });
    },
    setItemRatings: (
      state: IStoreItems,
      action: PayloadAction<{
        index: number;
        id: number;
      }>
    ) => {
      state.allItems = state.allItems.map((item: IData) => {
        if (item.id === action.payload.id) {
          item.ratings = action.payload.index + 1;
        }
        return item;
      });
      state.filteredItem = state.filteredItem.map((item: IData) => {
        if (item.id === action.payload.id) {
          item.ratings = action.payload.index + 1;
        }
        return item;
      });
    },

    addToCart: (state: IStoreItems, action: PayloadAction<{ id: number }>) => {
      const item = state.allItems.find((item) => item.id === action.payload.id);
      item.amount = 1;
      item.total = item.price;
      state.cart = [item, ...state.cart];
    },
    removeFromCart: (
      state: IStoreItems,
      action: PayloadAction<{ id: number }>
    ) => {
      state.allItems = state.allItems.map((item) => {
        if (item.id === action.payload.id) {
          item.amount = 0;
          item.total = 0;
        }
        return item;
      });
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    toggleItemAmount: (
      state: IStoreItems,
      action: PayloadAction<{ type: string; id: number }>
    ) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            item.amount = item.amount + 1;
          } else if (action.payload.type === "dec") {
            item.amount = item.amount - 1;
          }
          item.total = item.amount;
        }
        return item;
      });
    },
    getTotals: (state: IStoreItems) => {
      const { total, amount } = state.cart.reduce(
        (acc, curr: IData) => {
          const amount = curr.amount;
          const total = curr.amount * curr.price;
          acc.total = acc.total + total;
          acc.amount = acc.amount + amount;
          return acc;
        },
        { total: 0, amount: 0 }
      );

      state.total = total;
      state.amount = amount;
    },
    clearCart: (state: IStoreItems) => {
      state.cart = [];
    },
  },
});

export const {
  setFilterParameters,
  filterItems,
  filterItemsBySearch,
  setItemRatings,
  addToCart,
  removeFromCart,
  toggleItemAmount,
  clearCart,
  getTotals,
} = itemsSlice.actions;
export default itemsSlice.reducer;
