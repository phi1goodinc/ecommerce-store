import {createSlice} from "@reduxjs/toolkit"
import usaTShirt from "components/assets/images/new-collection-photo1.jpg"
import swimsuitGlow from "components/assets/images/new-collection-photo2.jpg"
import sweetShot from "components/assets/images/new-collection-photo3.jpg"

export interface productState {
    id: number,
    name: string,
    price: number,
    photo: string,
    category: string,
    categoryRus: string
}

const initialState = {
    items: [
        {
            id: 0,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt,
            category: "t-shirts",
            categoryRus: "Футболки"
        },
        {
            id: 1,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow,
            category: "swimming",
            categoryRus: "Купальники"
        },
        {
            id: 2,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot,
            category: "sweetShots",
            categoryRus: "Толстовки"
        },
        {
            id: 3,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt,
            category: "t-shirts",
            categoryRus: "Футболки"
        },
        {
            id: 4,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow,
            category: "swimming",
            categoryRus: "Купальники"
        },
        {
            id: 5,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot,
            category: "sweetShots",
            categoryRus: "Толстовки"
        },
    ] as Array<productState>,
    filteredItems: [] as Array<any>
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProducts(state, action) {
            state.filteredItems = state.items.filter(
                (item) => item.category === action.payload
            )
        },
    }
})

export const {filterProducts} = productsSlice.actions

export default productsSlice.reducer