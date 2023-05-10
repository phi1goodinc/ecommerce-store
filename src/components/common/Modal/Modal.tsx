import React, {FC, } from 'react'
import s from './Modal.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks"
import {toggleActive} from "../../../store/ModalSlice"

interface ModalProps {
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({children}) => {

    const active = useAppSelector(state => state.modal.active)
    const dispatch = useAppDispatch()

    return (
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => dispatch(toggleActive())}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;