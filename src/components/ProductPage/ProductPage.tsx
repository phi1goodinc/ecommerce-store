import React, {useEffect, useState} from 'react';
import s from "./ProductPage.module.css"
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "hooks";
import {getProductById, productState} from "store/ProductsSlice";

const ProductPage = () => {
    const dispatch = useAppDispatch()
    let {productId} = useParams()
    const productById = useAppSelector(state => state.products.filteredItems[0])
    const [product, setProduct] = useState({} as productState)

    useEffect(() => {
        dispatch(getProductById(Number(productId)))
        setProduct(productById)
    }, [productById]);

    return (
        <>
            <div className={`${s.container} site_container`}>
                <h2 className={s.title}>{product.name}</h2>
                <div className={s.section}>
                    <div>
                        <img className={s.photo} src={product.photo} alt={product.name}/>
                    </div>
                    <div className={s.description}>
                        <div>
                            <p className={s.price}>${product.price}</p>
                        </div>
                        <div>
                            <h5 className={s.secondary_title}>Выберите размер</h5>
                            <ul className={s.sizes}>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                                <li>XXL</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className={s.secondary_title}>Выберите цвет</h5>
                            <ul className={s.colors}>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <button className="btn_blue">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;