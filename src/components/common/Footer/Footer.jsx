import React from 'react';
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg"
import Navigation from "../Navigation/Navigation";
import s from './Footer.module.css'
import Logo from "../Logo/Logo";
import VisaMastercard from "../../assets/images/visa-mastercard.svg"

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={`${s.container} site_container`}>
                    <Logo/>
                    <div className={s.navigation_container}>
                        <Navigation/>
                    </div>
                    <div className={s.contacts_container}>
                        <div className={s.phone_container}>
                            <a className={s.number} href="tel:+78142332211">+7(814)-233-22-11</a>
                        </div>
                        <div className={s.mail}>
                            <a href="mailto:hello@womazing.com">hello@womazing.com</a>
                        </div>
                        <div className={s.socials_container}>
                            <a href="#">
                                <img src={instagram} alt="instagram logo"/>
                            </a>
                            <a href="#">
                                <img src={facebook} alt="facebook logo"/>
                            </a>
                            <a href="#">
                                <img src={twitter} alt="twitter logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`site_container ${s.bottom}`}>
                    <ul className={s.copyrights}>
                        <li>© Все права защищены</li>
                        <li>
                            <a href="#">Политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href="#">Публичная оферта</a>
                        </li>
                    </ul>
                    <div className={s.payment}>
                        <img src={VisaMastercard} alt="payment visa mastercard"/>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;