import React, {FC} from "react"
import s from "./Product.module.css"
import arrow from "components/assets/images/arrow.svg"
import {Link} from "react-router-dom";

const Product: FC<ProductProps> = ({name, photo, price, id}) => {
    return (
        <>
            <figure className={s.item}>
                <div>
                    <div className={s.image_container}>
                        <img src={photo} alt={name}/>
                        <div className={s.overlay}>
                            <Link to={`/shop/${id}`}><img src={arrow} alt="arrow"/></Link>
                        </div>
                    </div>
                    <figcaption>
                        <h5 className={s.description}>{name}</h5>
                        <p className={s.price}>${price}</p>
                    </figcaption>
                </div>
            </figure>
        </>
    )
}

export default Product

interface ProductProps {
    name: string,
    price: number,
    photo: string,
    id: number
}