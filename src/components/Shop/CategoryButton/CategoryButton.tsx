import React, {FC} from 'react'
import s from "./CategoryButton.module.css"

const CategoryButton:FC<CategoryButtonProps> = ({categories, categoryChangeHandler, currentCategory}) => {

    return (
        <div>
            <button className={
                categories.category === currentCategory
                    ? `${s.btn} ${s.active}`
                    : `${s.btn} ${s.transparent}`
            } onClick = {() => categoryChangeHandler(categories.category)}>{categories.categoryRus}</button>
        </div>
    )
}

export default CategoryButton

interface CategoryButtonProps {
    categories: {
        category: string,
        categoryRus: string
    }
    categoryChangeHandler: (arg: string) => void,
    currentCategory: string
}