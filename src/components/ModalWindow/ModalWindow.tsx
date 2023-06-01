import React from 'react';
import './modalWindow.scss'
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";

type ModalWindowType = {
    children: React.ReactNode
}
const ModalWindow: React.FC<ModalWindowType> = ({children}) => {
    const {active} = useAppSelector(state => state.config.activeModal);
    const dispstch = useAppDispatch();


    return (
        <>
            {active &&
                <div
                    onClick={() => dispstch(setActiveModal({active: false}))}
                    className={active ? 'modalWindow active' : 'modalWindow'}
                >
                    {children}
                </div>
            }
        </>
    );
};

export default ModalWindow;