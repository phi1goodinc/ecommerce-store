import React, {FC} from "react"
import s from "./Product.module.css"
import arrow from "components/assets/images/arrow.svg"

const Product: FC<ProductProps> = ({name, photo, price}) => {
    return (
        <>
            <figure className={s.item}>
                <a href="#">
                    <div className={s.image_container}>
                        <img src={photo} alt={name}/>
                        <div className={s.overlay}>
                            <button><img src={arrow} alt="arrow"/></button>
                        </div>
                    </div>
                    <figcaption>
                        <h5 className={s.description}>{name}</h5>
                        <p className={s.price}>${price}</p>
                    </figcaption>
                </a>
            </figure>
        </>
    )
}

export default Product

interface ProductProps {
    name: string,
    price: number,
    photo: string,
}