import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from '../../index'
import { setLineItem, setLineItems } from '../actions'
import { LineItem } from '@/types'

export function useCartStateManager() {
  const dispatch = useAppDispatch()

  const lineItems = useSelector<
    AppState,
    AppState['cart']['lineItems']
  >((state) => state.cart.lineItems)

  const total = useSelector((state: AppState) => state.cart.lineItems.length)

  const addCartPreference = useCallback(
    (newState: LineItem) => {
      dispatch(setLineItem(newState))
    },
    [dispatch],
  )

  const updateQuantityInCart = useCallback(
    (quantity: number) => {
      const updated = lineItems?.map((item: LineItem) => ({
        ...item,
        quantity: quantity
      }))
      dispatch(setLineItems(updated))
    },
    [dispatch, lineItems],
  )

  const removeCart = (id: number) => {
    const filteredItems = lineItems.filter(({ pId }) => pId !== id);
    dispatch(setLineItems(filteredItems))
  }

  const checkAlreadyCart = useCallback(
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
    addCartPreference,
    updateQuantityInCart,
    removeCart,
    checkAlreadyCart
  } as const
}
