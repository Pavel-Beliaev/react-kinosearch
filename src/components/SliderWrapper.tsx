import React, {FC} from 'react';
import {SliderShow} from "./SliderShow";
import Title from "./Title";

type SliderWrapperType = {
    title: string,
    children: React.ReactElement | React.ReactNode
}
export const SliderWrapper:FC<SliderWrapperType> = ({title, children}) => {

    return (
        <>
            <Title>{title}</Title>
            <div>
                <SliderShow
                    slideCount={4}
                    children={children}
                />
            </div>
        </>
    );
};