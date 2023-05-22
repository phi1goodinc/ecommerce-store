import React from 'react';
import s from "./Cart.module.css"
import photo from "components/assets/images/new-collection-photo1.jpg"
import cross from "components/assets/images/cart/cross.svg"

const Cart = () => {
    return (
        <>
            <div className={`${s.container} site_container`}>
                <h2 className={s.title}>Корзина</h2>
                <div className={s.header}>
                    <div className={s.name}>
                        <h5>Товар</h5>
                    </div>
                    <div className={s.price}>
                        <h5>Цена</h5>
                    </div>
                    <div className={s.count}>
                        <h5>Количество</h5>
                    </div>
                </div>
                <div className={s.product}>
                    <div className={s.product_controls}>
                        <button type="button">
                            <img src={cross} alt="delete button"/>
                        </button>
                    </div>
                    <div className={s.product_photo}>
                        <img src={photo} alt="item"/>
                    </div>
                    <div className={s.product_title}>Футболка USA</div>
                    <div className={s.product_price}>$129</div>
                    <div className={s.product_quantity}>
                        <input type="number" value='1'/>
                    </div>
                </div>
                <div className={s.footer}>
                    <div className={s.footer_total}>
                        <h5>Итого:</h5>
                        <p className={s.footer_price}>$129</p>
                    </div>
                    <div>
                        <button className={`${s.footer_btn} btn_blue`}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;