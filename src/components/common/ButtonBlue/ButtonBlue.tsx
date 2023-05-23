import React, {FC} from 'react'
import {Link} from "react-router-dom"
import s from "./ButtonBlue.module.css"

const ButtonBlue : FC<ButtonProps> = ({url, children}) => {
    return (
        <Link to={url} className={s.btn} preventScrollReset={false}>{children}</Link>
    );
};

export default ButtonBlue;

interface ButtonProps {
    url: string,
    children: string,
}
