import React from 'react';
import './modalWindow.scss'
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";
import {ModalWindowType} from "./types";

const ModalWindow: React.FC<ModalWindowType> = ({children}) => {
    const dispstch = useAppDispatch();
    const {active} = useAppSelector(state => state.config.activeModal);

    return (
        <>
            {active &&
                <div
                    onClick={() =>
                        dispstch(setActiveModal({
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

export default ModalWindow;