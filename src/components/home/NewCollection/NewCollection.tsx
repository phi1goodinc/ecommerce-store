import React from 'react';
import photo1 from "../../assets/images/new-collection-photo1.jpg";
import photo2 from "../../assets/images/new-collection-photo2.jpg";
import photo3 from "../../assets/images/new-collection-photo3.jpg";
import arrow from "../../assets/images/arrow.svg";
import s from './NewCollection.module.css'

const NewCollection = () => {
    return (
        <>
            <div className={`${s.newcollection_container} site_container`} id='newcollection'>
                <h3 className={s.title}>Новая коллекция</h3>
                <div className={s.offers_container}>
                    <figure className={s.item}>
                        <a href="#">
                            <div className={s.image_container}>
                                <img className={s.image} src={photo1} alt="Футболка USA"/>
                                <div className={s.overlay}>
                                    <a href="#"><img src={arrow} alt="arrow"/></a>
                                </div>
                            </div>
                            <figcaption>
                                <h5 className={s.description}>Футболка USA</h5>
                                <p className={s.price}>$129</p>
                            </figcaption>
                        </a>

                    </figure>
                    <figure className={s.item}>
                        <a href="#">
                            <div className={s.image_container}>
                                <img className={s.image} src={photo2} alt="Купальник Glow"/>
                                <div className={s.overlay}>
                                    <a href="#"><img src={arrow} alt="arrow"/></a>
                                </div>
                            </div>
                            <figcaption>
                                <h5 className={s.description}>Купальник Glow</h5>
                                <p className={s.price}>$129</p>
                            </figcaption>
                        </a>
                    </figure>
                    <figure className={s.item}>
                        <a href="#">
                            <div className={s.image_container}>
                                <img className={s.image} src={photo3} alt="Свитшот Sweet Shot"/>
                                <div className={s.overlay}>
                                    <a href="#"><img src={arrow} alt="arrow"/></a>
                                </div>
                            </div>
                            <figcaption>
                                <h5 className={s.description}>Свитшот Sweet Shot</h5>
                                <p className={s.price}>$129</p>
                            </figcaption>
                        </a>
                    </figure>
                </div>
                <div className={s.btn_container}>
                    <button className={s.open_btn}>Открыть магазин</button>
                </div>

            </div>
        </>
    );
};

export default NewCollection;