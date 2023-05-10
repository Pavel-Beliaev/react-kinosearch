import React from 'react';
import SliderShow from "./SliderShow/SliderShow";
import {SliderWrapperType} from "../@types/@types";

const SliderWrapper:React.FC<SliderWrapperType> = ({title, children}) => {
    return (
        <>
            <h2>{title}</h2>
            <div className='page-slider'>
                <SliderShow
                    slideCount={4}
                    children={children}
                />
            </div>
        </>
    );
};

export default SliderWrapper;