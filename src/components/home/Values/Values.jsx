import React from 'react';
import quality from '../../assets/images/quality-logo.svg'
import speed from '../../assets/images/speed-logo.svg'
import responsibility from '../../assets/images/responsibility-logo.svg'
import s from './Values.module.css'


const Values = () => {
    return (
        <>
            <div className={`${s.values_container} site_container`}>
                <h3 className={s.title}>Что для нас важно</h3>
                <div className={s.values}>
                    <figure className={s.value}>
                        <img src={quality} className={s.image} alt="quality logo"/>
                        <figcaption>
                            <h4 className={s.value_title}>Качество</h4>
                            <p className={s.description}>Наши профессионалы работают на лучшем оборудовании
                                для пошива одежды беспрецедентного качества</p>
                        </figcaption>
                    </figure>
                    <figure className={s.value}>
                        <img src={speed} className={s.image} alt="quality logo"/>
                        <figcaption>
                            <h4 className={s.value_title}>Скорость</h4>
                            <p className={s.description}>Благодаря отлаженной системе в Womazing мы можем
                                отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                        </figcaption>
                    </figure>
                    <figure className={s.value}>
                        <img src={responsibility} className={s.image} alt="quality logo"/>
                        <figcaption>
                            <h4 className={s.value_title}>Ответственность</h4>
                            <p className={s.description}>Мы заботимся о людях и планете. Безотходное производство
                                и комфортные условия труда - все это Womazing</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
};

export default Values;