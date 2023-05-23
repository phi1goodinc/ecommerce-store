import React, {FC} from 'react';
import s from "./Title.module.css";

const Title: FC<TitleProps> = ({children}) => {
    return (
        <>
            <h1 className={s.title}>{children}</h1>
        </>
    );
};

export default Title;

interface TitleProps {
    children: React.ReactNode
}
