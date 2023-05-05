import React from 'react';
import card from '../../assets/images/card.svg';
import phone from '../../assets/images/phone.svg';
import s from './Header.module.css'
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <>
            <header>
                <div className={`${s.container} site_container`}>
                    <Logo/>
                    <Navigation/>
                    <div className={s.phone_container}>
                        <img src={phone} alt="phone icon"/>
                        <a href="tel:+78142332211">+7(814)-233-22-11</a>
                    </div>
                    <div>
                        <img src={card} alt="card logo"/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;