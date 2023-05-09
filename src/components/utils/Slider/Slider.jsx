import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css';
import s from './Slider.module.css'

const SyncSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <Slider  className={s.slider} {...settings}>
            <div className={s.item}>
                <h2 className={s.title}>Новые поступления<br/>в этом сезоне</h2>
                <p className={s.text}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
                    Время исследовать.</p>
            </div>
            <div className={s.item}>
                <h2 className={s.title}>Что-то новенькое.<br/>Мы заждались тебя.</h2>
                <p className={s.text}>Надоело искать себя в сером городе?
                   Настало время новых идей, свежих{s.красо} и вдохновения с Womazing!</p>
            </div>
            <div className={s.item}>
                <h2 className={s.title}>Включай новый сезон с WOMAZING</h2>
                <p className={s.text}>Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
            </div>
        </Slider>
    )
}

export default SyncSlider;

