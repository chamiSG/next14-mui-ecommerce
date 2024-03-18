import { LineItem } from "@/types"
import { createAction } from "@reduxjs/toolkit"

type T = any
export const setWishListLineItems = createAction<Array<T>>('wishlist/setWishListLineItems')
export const setWishListLineItem = createAction<LineItem>('wishlist/setWishListLineItem')