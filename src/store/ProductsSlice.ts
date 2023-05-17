import {createSlice, PayloadAction} from "@reduxjs/toolkit"
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
        {
            id: 6,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt,
            category: "t-shirts",
            categoryRus: "Футболки"
        },
        {
            id: 7,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow,
            category: "swimming",
            categoryRus: "Купальники"
        },
        {
            id: 8,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot,
            category: "sweetShots",
            categoryRus: "Толстовки"
        },
        {
            id: 9,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt,
            category: "t-shirts",
            categoryRus: "Футболки"
        },
        {
            id: 10,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow,
            category: "swimming",
            categoryRus: "Купальники"
        },
        {
            id: 11,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot,
            category: "sweetShots",
            categoryRus: "Толстовки"
        }, {
            id: 12,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt,
            category: "t-shirts",
            categoryRus: "Футболки"
        },
        {
            id: 13,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow,
            category: "swimming",
            categoryRus: "Купальники"
        },
        {
            id: 14,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot,
            category: "sweetShots",
            categoryRus: "Толстовки"
        },
        {
            id: 15,
            name: "Футболка USA",
            price: 129,
            photo: usaTShirt,
            category: "t-shirts",
            categoryRus: "Футболки"
        },
        {
            id: 16,
            name: "Купальник Glow",
            price: 129,
            photo: swimsuitGlow,
            category: "swimming",
            categoryRus: "Купальники"
        },
        {
            id: 17,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot,
            category: "sweetShots",
            categoryRus: "Толстовки"
        },
        {
            id: 18,
            name: "Свитшот Sweet Shot",
            price: 129,
            photo: sweetShot,
            category: "sweetShots",
            categoryRus: "Толстовки"
        }
    ] as Array<productState>,
    filteredItems: [] as Array<productState>,
    itemsPerPage: 9,
    currentPage: 1,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProducts: (state, action: PayloadAction<string>) => {
            state.filteredItems = state.items.filter(
                (item) => item.category === action.payload
            )
            state.currentPage = 1
        },
        getProductById: (state,action: PayloadAction<number>) => {
            state.filteredItems = state.items.filter((item) => item.id === action.payload)
        },
        onNavigateNext: (state) => {
            state.currentPage++
        },
        onNavigatePrev: (state) => {
            state.currentPage--
        },
        onPageChange: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export const {filterProducts, onNavigateNext, onNavigatePrev, onPageChange, getProductById} = productsSlice.actions

export default productsSlice.reducer