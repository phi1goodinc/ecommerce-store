import React from "react"
import s from "./NewCollection.module.css"
import {useAppSelector} from "hooks"
import Product from "components/common/Product/Product"
import {Link} from "react-router-dom";

const NewCollection = () => {

    const items = useAppSelector(state => state.products.items)

    return (
        <>
            <div className={`${s.container} site_container`} id='newcollection'>
                <h3 className={s.title}>Новая коллекция</h3>
                <div className={s.offers_container}>
                    {items.slice(-3).map(product => {
                        return  <Product photo={product.photo} name={product.name} price={product.price} key={product.id} id={product.id}/>})
                    }
                </div>
                <div className={s.btn_container}>
                    <Link to='/shop' className={s.open_btn}>Открыть магазин</Link>
                </div>

            </div>
        </>
    );
};

export default NewCollection;