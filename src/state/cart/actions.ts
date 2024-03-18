import { LineItem } from "@/types"
import { createAction } from "@reduxjs/toolkit"

type T = any
export const setLineItems = createAction<Array<T>>('cart/setLineItems')
export const setLineItem = createAction<LineItem>('cart/setLineItem')