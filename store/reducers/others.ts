import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOthers } from "../../types/interfaces";

const initialState: IOthers = {
  activeIconIndex: 0,
  menuItemsPosition: 400,
};

const otherSlices = createSlice({
  name: "others",
  initialState,
  reducers: {
    increaseMenuItemsPosition: (state: IOthers) => {
      state.menuItemsPosition = state.menuItemsPosition + 100;
      if (state.menuItemsPosition > 1320) {
        state.menuItemsPosition = 1200;
      }
    },
    decreaseMenuItemsPosition: (state: IOthers) => {
      state.menuItemsPosition = state.menuItemsPosition - 100;
      if (state.menuItemsPosition < 0) {
        state.menuItemsPosition = 0;
      }
    },
    setActiveIconIndex: (
      state: IOthers,
      action: PayloadAction<{ index: number }>
    ) => {
      state.activeIconIndex = action.payload.index;
    },
  },
});

export const {
  increaseMenuItemsPosition,
  decreaseMenuItemsPosition,
  setActiveIconIndex,
} = otherSlices.actions;
export default otherSlices.reducer;
