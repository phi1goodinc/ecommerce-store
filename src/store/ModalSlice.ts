import {createSlice} from "@reduxjs/toolkit"

export interface ModalState {
    active: boolean
}

const initialState: ModalState = {
    active: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleActive: state => {
            state.active = !state.active
        }
    }
})

export const {toggleActive} = modalSlice.actions

export default modalSlice.reducer