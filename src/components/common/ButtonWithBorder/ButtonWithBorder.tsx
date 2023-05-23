import React, {FC} from 'react';
import {Link} from "react-router-dom";
import s from "./ButtonWithBorder.module.scss";

const ButtonWithBorder : FC<ButtonProps> = ({url, children}) => {
    return (
        <Link to={url} className={s.btn}>{children}</Link>
    );
};

export default ButtonWithBorder;

interface ButtonProps {
    url: string,
    children: string,
}