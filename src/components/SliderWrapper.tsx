import React, {FC} from 'react';
import {SliderShow} from "./SliderShow";

type SliderWrapperType = {
    title: string,
    children: React.ReactElement | React.ReactNode
}
export const SliderWrapper:FC<SliderWrapperType> = ({title, children}) => {

    return (
        <>
            <h2>{title}</h2>
            <div>
                <SliderShow
                    slideCount={4}
                    children={children}
                />
            </div>
        </>
    );
};