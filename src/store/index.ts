import {configureStore} from "@reduxjs/toolkit"
import modalReducer from "store/ModalSlice"
import productReducer from "./ProductsSlice"

const store = configureStore({
    reducer: {
        modal: modalReducer,
        products: productReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch