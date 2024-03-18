import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from '../../index'
import { setWishListLineItem, setWishListLineItems } from '../actions'
import { LineItem } from '@/types'

export function useWishlistStateManager() {
  const dispatch = useAppDispatch()

  const total = useSelector((state: AppState) => state.wishlist.lineItems.length)

  const lineItems = useSelector<
    AppState,
    AppState['wishlist']['lineItems']
  >((state) => state.wishlist.lineItems)

  const addWishListPreference = useCallback(
    (newState: LineItem) => {
      dispatch(setWishListLineItem(newState))
    },
    [dispatch],
  )

  const removeWishlist = (id: number) => {
    const filteredItems = lineItems.filter(({ pId }) => pId !== id);
    dispatch(setWishListLineItems(filteredItems))
  }

  const checkAlreadyWishList = useCallback(
    (id: number) => {
      const index = lineItems.findIndex((item: LineItem) => item.pId === id)
      if (index === -1) {
        return false
      }
      return true
    },
    [lineItems],
  )

  return {
    total,
    lineItems,
    removeWishlist,
    addWishListPreference,
    checkAlreadyWishList
  } as const
}
