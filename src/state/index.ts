import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import modal from './modal/reducer'
import cart from './cart/reducer'
import wishlist from './wishlist/reducer'

const PERSISTED_KEYS: string[] = ['cart', 'wishlist']

const persistConfig = {
  key: 'primary',
  whitelist: PERSISTED_KEYS,
  storage,
  version: 1,
}

const reducers = combineReducers({
  cart,
  wishlist,
  modal
});

const persistedReducer = persistReducer(
  persistConfig,
  reducers
)

// eslint-disable-next-line import/no-mutable-exports
let store: ReturnType<typeof makeStore>

export function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  })
}


export const initializeStore = (preloadedState = undefined) => {
  let _store = store ?? makeStore(preloadedState)

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) {
    store = _store
  }

  return _store
}

store = initializeStore()

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

export const persistor = persistStore(store)

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState])
}
