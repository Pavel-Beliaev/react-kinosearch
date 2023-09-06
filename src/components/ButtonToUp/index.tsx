import React, {FC} from 'react';
import {useScroll} from "../../hooks/useScroll";
import './buttonToUp.scss'

type PropsType = {
    scroll: boolean
}
export const ButtonToUp: FC<PropsType> = React.memo(({scroll}) => {
    const scrollTo = useScroll()

    return (
        <button
            style={{opacity: scroll ? 1 : 0}}
            onClick={() => scrollTo(0, 0, "auto")}
            className="back-to-top"
        >
            <i className="fa fa-chevron-up"></i>
        </button>
    );
});