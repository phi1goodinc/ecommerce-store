import React from "react"
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <div className={s.links_container}>
                <nav className={s.links}>
                    <NavLink to="/" className={s.nav_item}>Главная</NavLink>
                    <NavLink to="/shop" className={s.nav_item}>Магазин</NavLink>
                    <NavLink to="/about" className={s.nav_item}>О&nbsp;бренде</NavLink>
                    <NavLink to="/contacts" className={s.nav_item}>Контакты</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Navigation