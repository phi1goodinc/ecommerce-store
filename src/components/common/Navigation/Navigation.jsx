import React from 'react';
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <>
            <div className={s.links_container}>
                <nav className={s.links}>
                    <div className={s.nav_item}>Главная</div>
                    <div className={s.nav_item}>Магазин</div>
                    <div className={s.nav_item}>О&nbsp;бренде</div>
                    <div className={s.nav_item}>Контакты</div>
                </nav>
            </div>
        </>
    );
};

export default Navigation;