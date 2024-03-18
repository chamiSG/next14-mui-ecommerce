import { createReducer } from '@reduxjs/toolkit'
import { setWishListLineItems, setWishListLineItem } from './actions'
import { LineItem } from '@/types';

export const initialState: { lineItems: LineItem[] } = {
  lineItems: [],
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(setWishListLineItems, (state: any, action: any) => {
      state.lineItems = action.payload;
    })
    .addCase(setWishListLineItem, (state: any, action: any) => {
      state.lineItems.push(action.payload);
    })
)
