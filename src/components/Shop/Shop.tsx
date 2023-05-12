import React, {useState} from "react"
import s from "./Shop.module.css"
import CategoryButton from "./CategoryButton/CategoryButton"
import {useAppDispatch, useAppSelector} from "../../hooks"
import Product from "components/common/Product/Product"
import {filterProducts} from "store/ProductsSlice"

const Shop = () => {
    const items = useAppSelector(state => state.products.items)
    const filteredItems = useAppSelector((state) => state.products.filteredItems)
    const dispatch = useAppDispatch()

    //создаем уникальный массив из обектов содержащих категорию и русифицированное название
    const categoriesAll = items.map((item) => {
        return {
            category: item.category,
            categoryRus: item.categoryRus
        }
    })
    const uniqCategories = new Set(categoriesAll.map(e => JSON.stringify(e)))
    const arrayCategories = Array.from(uniqCategories).map(e => JSON.parse(e))



    const [filter, setFilter] = useState(false)
    const [currentCategory, setCurrentCategory] = useState("")

    const categoryChangeHandler = (category: string) => {
        setCurrentCategory(category)
        if (category === "all") {
            setFilter(false)
        } else {
            dispatch(filterProducts(category))
            setFilter(true)
        }
    }

    return (
        <>
            <div className={`${s.container} site_container`}>
                <h2 className={s.main_title}>Магазин</h2>

                <div className={s.filter_btns}>
                    <CategoryButton categories={{category:"all", categoryRus:"Все"}} categoryChangeHandler={categoryChangeHandler}
                                    currentCategory={currentCategory}/>
                    {
                        arrayCategories.map((category, id) => {
                            return <CategoryButton categories={category} categoryChangeHandler={categoryChangeHandler}
                                                   key={id} currentCategory={currentCategory}/>
                        })
                    }
                </div>

                <p className={s.amount}>Показано: {filter ? filteredItems.length : items.length} из {items.length} товаров</p>

                <div className={s.products}>
                    {!filter &&
                    items.map((product) => (
                        <Product key={product.id} name={product.name} price={product.price} photo={product.photo}/>))
                    }
                    {filter &&
                    filteredItems.map((product) => (
                        <Product key={product.id} name={product.name} price={product.price} photo={product.photo}/>))
                    }
                </div>
            </div>
        </>
    )
}

export default Shop