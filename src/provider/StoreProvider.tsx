'use client'
import { Provider } from 'react-redux'
import { persistor, useStore } from '@/state'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const store = useStore(null)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}