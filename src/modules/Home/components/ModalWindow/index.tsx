import React, {FC} from 'react';
import './modalWindow.scss'
import {useAppDispatch, useAppSelector} from "../../../../Store/store";
import {setActiveModal} from "../../../../Store/config/slice";

type PropsType = {
    children: React.ReactNode
}

export const ModalWindow:FC<PropsType> = ({children}) => {
    const dispatch = useAppDispatch();
    const {active} = useAppSelector(state => state.config.activeModal);

    const dispatchActiveModalHandler = () => {
        dispatch(
            setActiveModal({
                active: false,
            })
        );
    };

    return (
        <>
            {active &&
                <div
                    onClick={dispatchActiveModalHandler}
                    className={`modalWindow ${active && 'active'}`}
                >
                    {children}
                </div>
            }
        </>
    );
};