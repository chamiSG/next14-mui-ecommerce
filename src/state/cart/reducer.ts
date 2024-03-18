import { createReducer } from '@reduxjs/toolkit'
import { setLineItems, setLineItem } from './actions'
import { LineItem } from '@/types';

export const initialState: { lineItems: LineItem[] } = {
  lineItems: [],
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(setLineItems, (state: any, action: any) => {
      state.lineItems = action.payload;
    })
    .addCase(setLineItem, (state: any, action: any) => {
      state.lineItems.push(action.payload);
    })
)
