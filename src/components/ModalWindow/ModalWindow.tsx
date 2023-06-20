import React, {FC} from 'react';
import './modalWindow.scss'
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";
import {ModalWindowType} from "./types";

export const ModalWindow:FC<ModalWindowType> = ({children}) => {
    const dispatch = useAppDispatch();
    const {active} = useAppSelector(state => state.config.activeModal);

    return (
        <>
            {active &&
                <div
                    onClick={() =>
                        dispatch(setActiveModal({
                            active: false
                        }))
                    }
                    className={active
                        ? 'modalWindow active'
                        : 'modalWindow'
                    }
                >
                    {children}
                </div>
            }
        </>
    );
};