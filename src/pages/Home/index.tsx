import React, {FC} from 'react';
import {SliderTrailers, PlayerInModal, TrendingBlock, TopRateBlock, ModalWindow} from "../../modules";
export const Home: FC = () => {

    return (
        <div className="frameworks">
            <div className='page-frame'>
                <TrendingBlock/>
            </div>
            <div className='page-frame'>
                <SliderTrailers/>
            </div>
            <div className='page-frame'>
                <TopRateBlock/>
            </div>
            <ModalWindow>
                <PlayerInModal/>
            </ModalWindow>
        </div>
    );
};