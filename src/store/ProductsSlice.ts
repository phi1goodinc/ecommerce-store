import {createSlice} from "@reduxjs/toolkit"
import usaTShirt from "components/assets/images/new-collection-photo1.jpg"
import swimsuitGlow from "components/assets/images/new-collection-photo2.jpg"
import sweetShot from "components/assets/images/new-collection-photo3.jpg"

export interface productState {
    id: number,
    name: string,
    price: number,
    photo: string,
}

const initialState = {
    items: [
        {
            id: 0,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt
        },
        {
            id: 1,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow
        },
        {
            id: 2,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot
        },
        {
            id: 3,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt
        },
        {
            id: 4,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow
        },
        {
            id: 5,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot
        },
    ] as Array<productState>
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export const {} = productsSlice.actions

export default productsSlice.reducer