import React from "react"
import model1 from "../assets/images/aboutUs/model1.jpg"
import model2 from "../assets/images/aboutUs/model2.jpg"
import s from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <>
            <div className={s.about_wrapper}>
                <div className={`${s.wrapper} site_container`}>
                    <h2 className={s.main_title}>О бренде</h2>
                    <div className={s.blocks}>
                        <div className={s.section}>
                            <figure>
                                <img src={model1} alt="model one"/>
                            </figure>
                            <figcaption className={s.description}>
                                <h4 className={s.title}>Идея и женщина</h4>
                                <p className={s.paragraph}>Womazing была основана в 2010-ом и стала одной из самых
                                    успешных
                                    компаний нашей страны.
                                    Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один
                                    из
                                    членов
                                    семьи не является модельером.</p>
                                <p className={s.paragraph}>Мы действуем по успешной формуле, прибегая к услугам
                                    известных
                                    модельеров для создания
                                    своих
                                    коллекций.
                                    Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского
                                    со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                            </figcaption>
                        </div>
                        <div className={`${s.section} ${s.left}`}>
                            <figure>
                                <img src={model2} alt="model one"/>
                            </figure>
                            <figcaption className={s.description}>
                                <h4 className={s.title}>Магия в деталях</h4>
                                <p className={s.paragraph}>Первый магазин Womazing был открыт в маленьком городке на
                                    севере
                                    страны в 2010-ом году.
                                    Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских
                                    моделей.</p>
                                <p className={s.paragraph}> Несмотря на то, что по образованию основательница была
                                    адвокатом, ее семья всегда была тесно связана с шитьём
                                    (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную
                                    школу кроя и шитья).
                                    Стремление производить одежду для масс несло в себе большие перспективы, особенно в
                                    то
                                    время,
                                    когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter
                                    попросту не существовало. </p>
                            </figcaption>
                        </div>
                    </div>
                </div>
                <div className={`${s.btn_wrapper} site_container`}>
                    <button className={`${s.btn} btn_blue`}>Перейти в магазин</button>
                </div>
            </div>
        </>
    );
};

export default AboutUs;