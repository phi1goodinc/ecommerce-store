import React from 'react'
import s from './Contscts.module.css'
import MapComponent from "./parts/MapComponent";

const Contacts = () => {
    return (
        <>
            <div className={`${s.wrapper} site_container`}>
                <div>
                    <h2 className={s.title}>Контакты</h2>
                </div>
                <div className={s.map_wrapper}>
                    <MapComponent/>
                </div>
                <div>
                    <ul className={s.contacts}>
                        <li>
                            <h5>Телефон</h5>
                            <a href="tel:+78142332211">+7(814)-233-22-11</a>
                        </li>
                        <li>
                            <h5>E-mail</h5>
                            <a href="mailto:info@sitename.com">info@sitename.com</a>
                        </li>
                        <li>
                            <h5>Адрес</h5>
                            <p>г. Москва, 3-я улица Строителей, 25</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Contacts;