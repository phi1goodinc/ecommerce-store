import React from 'react';
import team from '../../assets/images/team.jpg';
import s from './DreamTeam.module.css'

const DreamTeam = () => {
    return (
        <>
            <div className={`${s.team_container} site_container`}>
                <h3 className={s.team_title}>Команда мечты Womazing</h3>
                <div className={s.team_wrapper}>
                    <img src={team} alt="our team photo"/>
                    <div className={s.description}>
                        <h4 className={s.title}>Для каждой</h4>
                        <div className={s.text}>
                            <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                            <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают
                                достоинства каждой девушки.</p>
                            <a className={s.more} href="#">Подробнее о бренде</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
);
};

export default DreamTeam;