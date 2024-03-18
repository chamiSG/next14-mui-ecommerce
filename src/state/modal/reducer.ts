import { createReducer } from '@reduxjs/toolkit'
import { resetModal, setModal } from './actions'

export const initialState: {
  open: boolean
  id: string
  anchor?: 'left' | 'top' | 'right' | 'bottom' | undefined
  props: any
} = {
  open: false,
  id: '',
  anchor: 'right',
  props: null,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(setModal, (state: any, action: any) => {
      state.open = true
      state.anchor = action.payload.anchor ?? 'right'
      state.id = action.payload.id
      state.props = action.payload.props
    })
    .addCase(resetModal, (state: any) => {
      state.open = false
      state.id = ''
      state.anchor = 'right'
      state.props = null
    })
)
