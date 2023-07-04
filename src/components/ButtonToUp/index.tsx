import React, {FC} from 'react';
import {useScroll} from "../../hooks/useScroll";

type ButtonToUpType = {
    scroll: number
}
const ButtonToUp:FC<ButtonToUpType> = ({scroll}) => {
    const scrollTo = useScroll()

    const handleUpButton = () => {
        scrollTo(0, 0, "auto")
    };

    return (
        <div
            style={{opacity: scroll < 300 ? 0 : 1,}}
            onClick={handleUpButton}
            className="back-to-top"
        >
            <i className="fa fa-chevron-up"></i>
        </div>
    );
};

export default ButtonToUp;