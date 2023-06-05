import React from 'react';
import SliderShow from "./SliderShow/SliderShow";

type SliderWrapperType = {
    title: string,
    children: React.ReactElement | React.ReactNode
}
const SliderWrapper: React.FC<SliderWrapperType> = ({title, children}) => {

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

export default SliderWrapper;