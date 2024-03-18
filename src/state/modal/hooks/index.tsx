import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from '../../index'
import { resetModal, setModal } from '../actions'

export function useModal() {
  const dispatch = useAppDispatch()

  const open = useSelector<
    AppState,
    AppState['modal']['open']
  >((state) => state.modal.open)

  const anchor = useSelector<
    AppState,
    AppState['modal']['anchor']
  >((state) => state.modal.anchor)

  const id = useSelector<
    AppState,
    AppState['modal']['id']
  >((state) => state.modal.id)

  const openModal = useCallback(
    (newState: any) => {
      dispatch(setModal({
        type: "OPEN_MODAL",
        ...newState
      }))
    },
    [dispatch],
  )

  const closeModal = useCallback(
    (newState: any) => {
      dispatch(resetModal({}))
    },
    [dispatch],
  )

  return {
    open,
    anchor,
    id,
    openModal,
    closeModal
  } as const
}
