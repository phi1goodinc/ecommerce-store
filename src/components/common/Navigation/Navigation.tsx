import React from 'react';
import s from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className={s.links_container}>
                <nav className={s.links}>
                    <NavLink to="/" className={s.nav_item}>Главная</NavLink>
                    <div className={s.nav_item}>Магазин</div>
                    <NavLink to="/about" className={s.nav_item}>О&nbsp;бренде</NavLink>
                    <div className={s.nav_item}>Контакты</div>
                </nav>
            </div>
        </>
    );
};

export default Navigation;