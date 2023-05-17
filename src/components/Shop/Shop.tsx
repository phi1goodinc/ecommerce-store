import React, {useRef, useState} from "react"
import s from "./Shop.module.css"
import CategoryButton from "./CategoryButton/CategoryButton"
import {useAppDispatch, useAppSelector} from "hooks"
import Product from "components/common/Product/Product"
import {filterProducts, onNavigateNext, onNavigatePrev, onPageChange} from "store/ProductsSlice"
import Paginator from "components/common/Paginator/Paginator"

const Shop = () => {
    const items = useAppSelector(state => state.products.items)
    const filteredItems = useAppSelector(state => state.products.filteredItems)
    const itemsPerPage = useAppSelector(state => state.products.itemsPerPage)
    const currentPage = useAppSelector(state => state.products.currentPage)
    const dispatch = useAppDispatch()

    const [filter, setFilter] = useState(false)
    const [currentCategory, setCurrentCategory] = useState("all")

    const getVisibleItems = (filter: boolean) => {
        const indexOfLastPage = currentPage * itemsPerPage
        const indexOfFirstPage = indexOfLastPage - itemsPerPage
        if (filter) {
            return filteredItems.slice(indexOfFirstPage, indexOfLastPage)
        } else {
            return items.slice(indexOfFirstPage, indexOfLastPage)
        }
    }

    const titleRef = useRef<HTMLHeadingElement>(null);
    const scrollToTitle = () => {
        titleRef.current?.scrollIntoView({behavior: "smooth"})
    }

    const pageChangeHandler = (currentPage: number | string) => {
        switch (currentPage) {
            case 'prev' :
                dispatch(onNavigatePrev())
                break
            case 'next' :
                dispatch(onNavigateNext())
                break
            default:
                dispatch(onPageChange(currentPage))
        }
        scrollToTitle()
    }

    //создаем уникальный массив из обектов содержащих категорию и русифицированное название
    const categoriesAll = items.map((item) => {
        return {
            category: item.category,
            categoryRus: item.categoryRus
        }
    })
    const uniqCategories = new Set(categoriesAll.map(e => JSON.stringify(e)))
    const arrayOfUniqCategories = Array.from(uniqCategories).map(e => JSON.parse(e))

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
                <h2 ref={titleRef} className={s.main_title}>Магазин</h2>

                <div className={s.filter_btns}>
                    <CategoryButton categories={{category: "all", categoryRus: "Все"}}
                                    categoryChangeHandler={categoryChangeHandler}
                                    currentCategory={currentCategory}/>
                    {
                        arrayOfUniqCategories.map((category, id) => {
                            return <CategoryButton categories={category} categoryChangeHandler={categoryChangeHandler}
                                                   key={id} currentCategory={currentCategory}/>
                        })
                    }
                </div>

                <p className={s.amount}>Показано: {getVisibleItems(filter).length} из {items.length} товаров</p>

                <div className={s.products}>
                    {
                        getVisibleItems(filter).map((product) => (
                            <Product key={product.id} id={product.id} name={product.name} price={product.price}
                                     photo={product.photo}/>))
                    }
                </div>

                <Paginator
                    totalUsersCount={filter ? filteredItems.length : items.length} currentPage={currentPage}
                    pageSize={itemsPerPage} onPageChange={pageChangeHandler}/>

            </div>
        </>
    )
}

export default Shop