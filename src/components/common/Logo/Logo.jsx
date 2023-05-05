import React from 'react';
import s from "./Logo.module.css";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
    return (
      <>
          <div className={s.logo_container}>
              <img src={logo} alt="brand logo"/>
              <p className={s.logo}>Womazing</p>
          </div>
      </>
    );
};

export default Logo;