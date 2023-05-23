import React from "react"
import SyncSlider from "components/utils/Slider/Slider.jsx"
import s from "./TopScreen.module.css"
import arrowDown from "components/assets/images/arrow-down.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import modelMain from "components/assets/images/topScreen/model-main.jpg"
import ButtonBlue from "components/common/ButtonBlue/ButtonBlue"

const TopScreen = () => {
    return (
        <>
            <div className={`${s.screen_wrapper} site_container`}>
                <section className={s.left}>
                    <div className={s.slider_wrapper}>
                        <SyncSlider/>
                    </div>
                    <div className={s.buttons}>
                        <AnchorLink className={s.arrow_btn} href="#newcollection">
                            <img src={arrowDown} alt="button to new collection section"/>
                        </AnchorLink>
                        <ButtonBlue url={"/shop"}>Открыть магазин</ButtonBlue>
                    </div>
                </section>
                <section className={s.right}>
                    <div className={s.background}></div>
                    <div>
                        <img src={modelMain} alt="main model"/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TopScreen;