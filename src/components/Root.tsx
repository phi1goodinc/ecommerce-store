import React from 'react';
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import { Outlet } from "react-router-dom";
import CallBackForm from "../components/common/CallBackForm/CallBackForm";
import Modal from "./common/Modal/Modal";
import { ScrollRestoration } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <ScrollRestoration/>
            <Header/>
            <Outlet/>
            <Footer/>
            <Modal>
                <CallBackForm/>
            </Modal>
        </div>
    );
};

export default Root;