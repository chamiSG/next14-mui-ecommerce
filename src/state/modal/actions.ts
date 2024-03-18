import { createAction } from "@reduxjs/toolkit"

export const setModal = createAction<any>('modal/setModal')
export const resetModal = createAction<any>('modal/resetModal')
