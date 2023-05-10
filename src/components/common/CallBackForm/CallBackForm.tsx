import * as React from 'react'
import s from './CallBackForm.module.css'

const CallBackForm = () => {

    return (
        <>
            <h4 className={s.title}>Заказать обратный звонок</h4>
            <div>
                <form className={s.wrapper}>
                    <input type="text" placeholder='Имя'/>
                    <input type="text" placeholder='E-mail'/>
                    <input type="text" placeholder='Телефон'/>
                    <button className={`${s.btn} btn_blue`}>Заказать звонок</button>
                </form>
            </div>
        </>
    );
}

export default CallBackForm